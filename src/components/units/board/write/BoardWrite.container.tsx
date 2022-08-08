import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { IBoardWrite, IMyvariables } from "./BoardWrite.types";
import BoardWriteUI from "./BoardWrite.presenter";
import YouTubeInputModal from "../../../commons/modal/youtube/YouTubeInput";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { checkFileValidation } from "../../../../commons/utilities/fileValidation";

export default function BoardWrite(props: IBoardWrite) {
   const router = useRouter();
   const [youTubeVisible, setYoutubeVisible] = useState(false);
   const [postVisible, setPostVisible] = useState(false);
   const [writer, setName] = useState("");
   const [password, setPassword] = useState("");
   const [title, setTitle] = useState("");
   const [contents, setContents] = useState("");
   const [youtubeUrl, setYoutubeUrl] = useState("");
   const [zipcode, setZipcode] = useState("");
   const [imageUrl, setImageUrl] = useState();
   const [address, setAddress] = useState("");
   const [addressDetail, setAddressDetail] = useState("");
   const [createBoard] = useMutation(CREATE_BOARD);
   const [updateBoard] = useMutation(UPDATE_BOARD);
   const [uploadFile] = useMutation(UPLOAD_FILE);
   const [disabled, setDisabled] = useState(true);

   function onChangeName(event: any) {
      setName(event.target.value);

      if (disabled === false && event.target.value === "") {
         setDisabled(true);
      }
      if (event.target.value && title && password && contents) {
         setDisabled(false);
      }
   }

   function onChangePw(event: any) {
      setPassword(event.target.value);

      if (disabled === false && event.target.value === "") {
         setDisabled(true);
      }
      if (writer && title && event.target.value && contents) {
         setDisabled(false);
      }
   }

   function onChangeTitle(event: any) {
      setTitle(event.target.value);

      if (disabled === false && event.target.value === "") {
         setDisabled(true);
      }
      if (writer && event.target.value && password && contents) {
         setDisabled(false);
      }
   }

   function onChangeContents(event: any) {
      setContents(event.target.value);

      if (disabled === false && event.target.value === "") {
         setDisabled(true);
      }
      if (writer && title && password && event.target.value) {
         setDisabled(false);
      }
   }
   function onChangeAddressDetail(event: any) {
      setAddressDetail(event.target.value);
   }
   function modalInputYouTube(para) {
      setYoutubeUrl(para);
   }

   const submit = async () => {
      try {
         const result = await createBoard({
            variables: {
               createBoardInput: {
                  writer,
                  title,
                  contents,
                  password,
                  youtubeUrl,
                  images: [imageUrl],
                  boardAddress: {
                     zipcode,
                     address,
                     addressDetail,
                  },
               },
            },
         });
         success("게시글이 등록 되었습니다.");
         router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };

   const update = async () => {
      const myVariables: IMyvariables = {
         boardId: router.query.number,
         updateBoardInput: {},
      };
      if (password) myVariables.password = password;
      if (contents) myVariables.updateBoardInput.contents = contents;
      if (title) myVariables.updateBoardInput.title = title;
      if (zipcode) myVariables.updateBoardInput.boardAddress = {};
      if (zipcode) myVariables.updateBoardInput.boardAddress.zipcode = zipcode;
      if (youtubeUrl) myVariables.updateBoardInput.youtubeUrl = youtubeUrl;
      if (address) myVariables.updateBoardInput.boardAddress = {};
      if (address) myVariables.updateBoardInput.boardAddress.address = address;
      if (addressDetail) myVariables.updateBoardInput.boardAddress = {};
      if (addressDetail)
         myVariables.updateBoardInput.boardAddress.addressDetail =
            addressDetail;
      if (imageUrl) myVariables.updateBoardInput.images = [imageUrl];

      if (
         !myVariables.updateBoardInput.contents &&
         !myVariables.updateBoardInput.title &&
         !myVariables.updateBoardInput.youtubeUrl &&
         !myVariables.updateBoardInput.boardAddress?.zipcode &&
         !myVariables.updateBoardInput.boardAddress?.address &&
         !myVariables.updateBoardInput.boardAddress?.addressDetail &&
         !myVariables.updateBoardInput.images
      )
         return info("수정한 것이 없습니다.");

      try {
         await updateBoard({
            variables: myVariables,
         });
         success("게시글이 수정 되었습니다.");
         router.push(`/boards/${router.query.number}`);
      } catch (error: any) {
         modalError(`${error.message}`);
      }
   };

   const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      console.log(file);

      const isValid = checkFileValidation(file);
      if (!isValid) return;

      try {
         const result = await uploadFile({ variables: { file } });
         console.log(result);

         setImageUrl(result.data.uploadFile.url);
      } catch (error) {
         modalError("에러가 발생하였습니다.");
      }
   };

   function onClickToYouTubeModal() {
      setYoutubeVisible((prev) => !prev);
   }
   function onClickToPostModal() {
      setPostVisible((prev) => !prev);
   }
   const handleComplete = (data) => {
      setZipcode(data.zonecode);
      setAddress(data.address);
      onClickToPostModal();
   };
   const success = (text) => {
      Modal.success({
         title: text,
      });
   };
   const modalError = (text) => {
      Modal.error({
         title: text,
      });
   };

   const info = (text) => {
      Modal.info({
         title: text,
      });
   };

   return (
      <>
         <BoardWriteUI
            onChangeName={onChangeName}
            onChangePw={onChangePw}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangeAddressDetail={onChangeAddressDetail}
            onChangeFile={onChangeFile}
            submit={submit}
            disabled={disabled}
            isEdit={props.isEdit}
            boardData={props.boardData}
            update={update}
            onClickToYouTubeModal={onClickToYouTubeModal}
            onClickToPostModal={onClickToPostModal}
            writer={writer}
            title={title}
            youtubeUrl={youtubeUrl}
            imageUrl={imageUrl}
            zipcode={zipcode}
            address={address}
         />
         {youTubeVisible && (
            <YouTubeInputModal
               onClickToYouTubeModal={onClickToYouTubeModal}
               modalInputYouTube={modalInputYouTube}
            />
         )}
         {postVisible && (
            <Modal
               visible={true}
               onOk={onClickToPostModal}
               onCancel={onClickToPostModal}
            >
               <DaumPostcode onComplete={handleComplete} />
            </Modal>
         )}
      </>
   );
}
