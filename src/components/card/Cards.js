import "./Cards.css";

const Cards = ({
  isOpen,
  onpress,
  title,
  isLock,
  isIterationData,
  onAdd,
  onReset,
}) => {
  return (
    <div className="mainContiner">
      <div className="mainTitleContiner">
        {!isOpen ? (
          <div onClick={onpress} className="sec-container">
            <p className="module-hading">{title}</p>
            <span>&#128275;</span>
          </div>
        ) : (
          <>
            <div onClick={onpress} className="sec-container">
              <p className="module-hading">{title}</p>
              <span>&#128275;</span>
            </div>
            {isIterationData?.map((item, index) => {
              return (
                <div className="taskIteration" key={index}>
                  <p className="module">{item?.iterationName}</p>
                  <span className="module-Title">{item?.iterationTitle}</span>
                  <span
                    className="circle-colr"
                    style={{
                      background: item?.selcetion ? "aliceblue" : "green",
                    }}
                  ></span>
                </div>
              );
            })}
            <div className="actionBtn_continer">
              <span className="lockStyle">LOCK</span>
              <span onClick={onReset} className="lockStyle">
                RESET
              </span>
              <span onClick={onAdd} className="addNewItem">
                + Add Iterarion
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
