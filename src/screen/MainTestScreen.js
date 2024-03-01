import { useState } from "react";
import Cards from "../components/card/Cards";
import { dummyJson } from "../extras/dummyData";
import Modal from "../components/customModal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { handleRemoveiterationArray } from "../redux/actions/Actions";

const TestScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [indexs, setIndexs] = useState(null);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch()
const jsonData = useSelector(state =>state?.maniReducer    )

  return (
    <div>
      {jsonData?.dummyData.map((item, index) => {
        return (
          <>
            <Cards
              title={item.moduleName}
              isIterationData={item.iteration}
              isOpen={index === indexs ? isOpenModal : null}
              onpress={() => {
                setIsOpenModal(!isOpenModal);
                setIndexs(index);
              }}
              onAdd={() => setModal(!modal)}
              onReset={()=>{dispatch(handleRemoveiterationArray(index))}}
            />
          </>
        );
      })}
      <Modal
        index={indexs}
        show={modal}
        close={() => {
          setModal(!modal);
        }}
      />
    </div>
  );
};

export default TestScreen;
