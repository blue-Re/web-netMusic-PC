import styled from "styled-components";

export const CommentListWrapper = styled.div`

  .comment-header{
    display: flex;
    align-items: end;
    border-bottom: 5px solid red;

    .comment-count {
      margin-left: 20px;
      font-size: 12px;
      color: gray;
    }
  }

  .comment-banner {
    .comment-banner-top{
      display: flex;
      align-items: center;
  
      .comment-avatar{
        width: 50px;
        height: 50px;
      }
  
      .comment-input {
        margin-top: 10px;
        margin-left: 20px;
      }
    }

    .comment-banner-bottom{
      display: flex;
      justify-content: space-between;
      padding: 5px 0px;

      .emojis {
        font-size: 20px;
        margin-left: 70px;

        span {
          margin: 0 5px;
        }
      }
    }
  }

`