import { httpGetAllBlogComments, httpPostCommentOnBlog } from "@/utils/api";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BlogCommentCard from "../blog-comment-card/blog-comment-card";
import { useFormik } from "formik";
import { CommentSchema } from "@/schema/schema.index";
import { GlobalContext } from "@/context/global.context";
import { makeid } from "@/helper-functions";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const CommentHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const CommentCardContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const CommentForm = styled.div``;

const FormHeading = styled.div`
  font-size: 30px;
  letter-spacing: 0.8px;
  font-weight: 600;
`;

const FormSubHeading = styled.div`
  font-size: 17px;
  letter-spacing: 0.5px;
  color: gray;
`;

const FormCommentArea = styled.textarea`
  width: 100%;
  margin-top: 60px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 17px;
  height: 200px;
  background: transparent;
  border: none;
  border: 1px solid;
  color: inherit;
  outline: none;
  font-family: inherit;
  @media (min-width: 800px) {
    width: 75%;
  }
`;

const FormInputContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 30px;
`;

const FormInput = styled.input`
  width: 250px;
  padding: 7px 10px;
  box-sizing: border-box;
  background: transparent;
  color: inherit;
  font-size: 17px;
  outline: none;
  border: none;
  border: 1px solid;
`;

const SubmitButton = styled.div`
  margin-top: 40px;
  box-sizing: border-box;
  padding: 7px 30px;
  border: 1px solid;
  border-color:  ${props => props.theme == 'light' ? 'black' : 'white'};
  background: ${props => props.theme == 'light' ? 'transparent' : 'black'};
  color: ${props => props.theme == 'light' ? 'black' : 'white'};
  width: fit-content;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme == 'light' ? 'black' : 'white'};
  color: ${props => props.theme == 'light' ? 'white' : 'black'};
  }
`;

const LoadMoreButton = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
  padding: 7px 30px;
  background: ${props => props.theme == 'light' ? 'black' : 'white'};
  color: ${props => props.theme == 'light' ? 'white' : 'black'};
  width: fit-content;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme == 'light' ? '#353535' : '#dbdbdb'};
  }
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
  margin-top: 10px;
`;

const DEFULT_COMMENT_FIELD = {
  Comment: "",
  Name: "",
  Email: "",
};

const BlogComments = ({ BlogId }) => {
  const [allComments, setAllComments] = useState([]);
  const [numCommentsToShow, setNumCommentsToShow] = useState(2);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const {addNotifiction, userInfo, theme} = useContext(GlobalContext)

  useEffect(() => {
    async function getAllComments() {
      let commentArray = await httpGetAllBlogComments(BlogId);
      console.log("updating comments", { commentArray });
      setAllComments(commentArray);
    }
    getAllComments();
  }, [BlogId]);

  const handleLoadMore = () => {
    if (isLoadMore == false) {
      setNumCommentsToShow(allComments.length);
      setIsLoadMore(true);
    } else {
      setNumCommentsToShow(2);
      setIsLoadMore(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue
  } = useFormik({
    initialValues: DEFULT_COMMENT_FIELD,
    validationSchema: CommentSchema,
    onSubmit: async (values) => {
      let date = new Date();
      let CommentedAt = date.getTime();
      console.log({
        ...values,
        CommentedAt,
        BlogId,
      });
      let newComment = { ...values, CommentedAt, BlogId };
      try {
        const response = await httpPostCommentOnBlog(newComment);
        if (response.success) {
          //to do add in notificaion
          newComment.CommentId = response.CommentId;
          setAllComments([newComment, ...allComments]);
          resetForm();
          let notiId = makeid(5);
          let type = "success";
          let message = "Posted comment successfully"
          addNotifiction(notiId, type, message);
          console.log(response);
        } else {
          addNotifiction(makeid(6), "danger", "Cannot post comment try again");
          console.log(response);
        }
      } catch (error) {
        addNotifiction(makeid(6), "danger", "Cannot post comment try again");
        console.error("error on posting comment", error);
      }
    },
  });

  useEffect(() => {
    if (userInfo.Name) {
      setFieldValue('Name', userInfo.Name)
      setFieldValue('Email', userInfo.Email)
    } else {
      setFieldValue('Name', "")
      setFieldValue('Email', "")
    }
  }, [userInfo])

  return (
    <Container>
      <Wrapper>
        <CommentHeader>{allComments.length} Comments</CommentHeader>
        <CommentCardContainer>
          {allComments.slice(0, numCommentsToShow).map((comment) => {
            return (
              <BlogCommentCard key={comment.CommentId} comment={comment} />
            );
          })}
        </CommentCardContainer>
        {allComments.length >= 3 && (
          <LoadMoreButton theme={theme} onClick={handleLoadMore}>
            {isLoadMore ? "Show Less" : "Load More"}
          </LoadMoreButton>
        )}
      </Wrapper>
      <CommentForm>
        <FormHeading>Leave a Comment</FormHeading>
        <FormSubHeading>
          Your email will not be published. Required fields are marked *
        </FormSubHeading>
        <div>
          <FormCommentArea
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
        <FormInputContainer>
          <div>
            <FormInput
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
            <FormInput
              placeholder="Email*"
              name="Email"
              type="email"
              value={values.Email}
              onChange={handleChange}
              error={touched.Email && Boolean(errors.Email)}
            />
            {touched.Email && errors.Email && (
              <ErrorMessage>{errors.Email}</ErrorMessage>
            )}
          </div>
        </FormInputContainer>
        <SubmitButton theme={theme} onClick={handleSubmit}>Submit</SubmitButton>
      </CommentForm>
    </Container>
  );
};

export default BlogComments;
