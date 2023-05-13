import { GlobalContext } from "@/context/global.context";
import { makeid } from "@/helper-functions";
import { ReplyCommentSchema } from "@/schema/schema.index";
import { httpGetAllBlogCommentReplies, httpPostReplyOnBlogComment } from "@/utils/api";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 90px;
`;

const CommentCard = styled.div`
  display: flex;
  column-gap: 20px;
`;

const UserImageContainer = styled.div`
  svg {
    padding: 8px 10px;
    color: black;
    background: white;
    border-radius: 50%;
  }
`;

const UserImage = styled.div`
svg {
  background: ${props => props.theme == 'light' ? 'black' : 'white'};
  color: ${props => props.theme == 'light' ? 'white' : 'black'};
}
`;
const UserInfoContainer = styled.div`
  width: 100%;
`;

const UserInfoWrapper = styled.div``;

const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const UserInfo = styled.div`
  font-size: 15px;
  color: gray;
`;

const CommentBody = styled.div`
  margin-top: 15px;
  letter-spacing: 0.5px;
  @media (min-width: 800px) {
    width: 70%;
  }
`;

const ActionButton = styled.div`
  display: ${(props) => props.display};
  margin-top: 20px;
  padding: 5px 20px;
  box-sizing: border-box;
  border: 1px solid;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
`;

const ReplyForm = styled.div`
  width: 100%;
  display: ${(props) => props.display};
  flex-direction: column;
  margin-top: 20px;
  row-gap: 15px;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const ReplyName = styled.input`
  background: transparent;
  font-size: 16px;
  padding: 5px 10px;
  color: inherit;
  outline: none;
  border: none;
  border: 1px solid;
  @media (min-width: 800px) {
    width: 40%;
  }
`;

const ReplyText = styled.textarea`
  height: 100px;
  background: transparent;
  font-size: 16px;
  padding: 5px 10px;
  color: inherit;
  outline: none;
  font-family: inherit;
  border: none;
  border: 1px solid;
  @media (min-width: 800px) {
    width: 70%;
  }
`;

const ReplyActionContainer = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
  cursor: pointer;
`;

const SubmitReply = styled.span`
  padding: 5px 25px;
  border: 1px solid;
  border-color:  ${props => props.theme == 'light' ? 'black' : 'white'};
  background: ${props => props.theme == 'light' ? 'white' : 'black'};
  color: ${props => props.theme == 'light' ? 'black' : 'white'};
  width: fit-content;
  font-weight: 500;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme == 'light' ? 'black' : 'white'};
  color: ${props => props.theme == 'light' ? 'white' : 'black'};
  }
`;

const HideOption = styled.span`
  text-decoration: underline;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

const RepliesContainer = styled.div`
  width: 75%;
  margin: 30px 0 0 120px;
`;

const ReplyCard = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 40px;
`;

const ReplyUserImage = styled.div`
  svg {
  background: ${props => props.theme == 'light' ? 'black' : 'white'};
  color: ${props => props.theme == 'light' ? 'white' : 'black'};
    padding: 4px 6px;
    border-radius: 50%;
    margin-top: 10px;
  }
`;

const ReplyUserWrapper = styled.div``;

const ReplyUserName = styled.div`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ReplyComment = styled.div`
  margin-top: 15px;
  letter-spacing: 0.5px;
  font-weight: 200;
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
  margin-top: 10px;
`;

const DEFULT_REPLY_FIELD = {
  Comment: "",
  Name: "",
};

const BlogCommentCard = ({ comment }) => {
  const { CommentId, Name, Comment, CommentedAt } = comment;

  const [allReplies, setAllReplies] = useState([]);
  const [isReplyFormOpen, setIsReplyCardOpen] = useState(false);

  const {userInfo, addNotifiction, theme} = useContext(GlobalContext)

  useEffect(() => {
    async function getAllReplies() {
      let repliesArray = await httpGetAllBlogCommentReplies(CommentId);
      setAllReplies(repliesArray);
    }
    getAllReplies();
  }, []);

  const handleReplyCardOnClick = () => {
    if (isReplyFormOpen) {
      setIsReplyCardOpen(false);
    } else {
      setIsReplyCardOpen(true);
    }
  };
  const hideReplyForm = () => {
    setIsReplyCardOpen(false);
  };


  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm, setFieldValue } =
    useFormik({
      initialValues: DEFULT_REPLY_FIELD,
      validationSchema: ReplyCommentSchema,
      onSubmit: async (values) => {
        console.log({
          ...values,
          CommentId,
        });
        let newReply = { ...values, CommentId };
        try {
          const response = await httpPostReplyOnBlogComment(newReply);
          if (response.success) {
            addNotifiction(makeid(6), "success", "Posted reply successfully");
            newReply.ReplyId = response.ReplyId;
            setAllReplies([...allReplies, newReply]);
            resetForm();
            console.log(response);
          } else {
            addNotifiction(makeid(6), "danger", "Cannot post reply try again");
            console.log(response);
          }
        } catch (error) {
          addNotifiction(makeid(6), "danger", "Cannot post reply try again");
          console.error("error on posting reply", error);
        }
      },
    });

    useEffect(() => {
      if (userInfo.Name) {
        setFieldValue('Name', userInfo.Name)
      }
    }, [userInfo])

  return (
    <Container>
      <CommentCard>
        <UserImageContainer>
          <UserImage theme={theme}>
            <FontAwesomeIcon icon={faUser} size="2xl" />
          </UserImage>
        </UserImageContainer>
        <UserInfoContainer>
          <UserInfoWrapper>
            <UserName>{Name ? Name : "Anonymous"}</UserName>
            <UserInfo>19 Mar</UserInfo>
          </UserInfoWrapper>
          <CommentBody>{Comment}</CommentBody>
          <ActionButton
            display={isReplyFormOpen ? "none" : "block"}
            onClick={handleReplyCardOnClick}
          >
            Reply
          </ActionButton>
          <ReplyForm display={isReplyFormOpen ? "flex" : "none"}>
            <div>
            <ReplyName
              placeholder="Name*"
              name="Name"
              type="text"
              value={values.Name}
              onChange={handleChange}
              error={touched.Name && Boolean(errors.Name)}
            />
            {touched.Name && errors.Name && (
              <ErrorMessage>{errors.Name}</ErrorMessage>
            )}
            </div>
            <div>
              <ReplyText
                placeholder="Comment*"
                name="Comment"
                value={values.Comment}
                onChange={handleChange}
                error={touched.Comment && Boolean(errors.Comment)}
              />
              {touched.Comment && errors.Comment && (
                <ErrorMessage>{errors.Comment}</ErrorMessage>
              )}
            </div>
            <ReplyActionContainer>
              <SubmitReply theme={theme} onClick={handleSubmit} >Submit</SubmitReply>
              <HideOption onClick={hideReplyForm}>Hide</HideOption>
            </ReplyActionContainer>
          </ReplyForm>
        </UserInfoContainer>
      </CommentCard>
      <RepliesContainer>
        {allReplies.map((reply) => {
          const { Name, ReplyId, Comment } = reply;
          return (
            <ReplyCard key={ReplyId}>
              <ReplyUserImage theme={theme}>
                <FontAwesomeIcon icon={faUser} size="xl" />
              </ReplyUserImage>
              <ReplyUserWrapper>
                <ReplyUserName>{Name}</ReplyUserName>
                <ReplyComment>{Comment}</ReplyComment>
              </ReplyUserWrapper>
            </ReplyCard>
          );
        })}
      </RepliesContainer>
    </Container>
  );
};

export default BlogCommentCard;
