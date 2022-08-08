import { Button, Select } from "antd";
import { MyModal } from "./PointSelect.styles";
const { Option } = Select;

export default function PointSelect(props) {
   const onToggleModal = () => {
      props.setIsModalVisible((prev: boolean) => !prev);
      props.setPoint(1000);
   };
   const onChangePoint = (value) => {
      props.setPoint(Number(value));
   };
   const onClickPoint = () => {
      props.onClickPoint(props.point);
      onToggleModal();
      props.setPoint(1000);
   };
   return (
      <>
         <MyModal
            title="포인트 충전"
            visible={true}
            onOk={onToggleModal}
            onCancel={onToggleModal}
            footer={[
               <Button key="back" onClick={onToggleModal}>
                  취소
               </Button>,
               <Button key="submit" type="primary" onClick={onClickPoint}>
                  확인
               </Button>,
            ]}
         >
            <Select
               defaultValue="1000"
               style={{ width: 300 }}
               onChange={onChangePoint}
            >
               <Option value="1000">1,000 포인트</Option>
               <Option value="2000">2,000 포인트</Option>
               <Option value="5000">5,000 포인트</Option>
               <Option value="10000">10,000 포인트</Option>
               <Option value="50000">50,000 포인트</Option>
            </Select>
         </MyModal>
      </>
   );
}
