import React from "react";
import "./style.css";

import NewInformation from "./NewInformation";
import ChangePage from "./ChangePage";
import { useNewDataAboutUser } from "../castomHooks/useNewDataAboutUser";
import FinalPage from "./FinalPage";

function UserPersonalData() {
  const {
    steps,
    info,
    currentPage,
    activeButton,
    handleChangeInput,
    handleClickChangePage,
  } = useNewDataAboutUser();

  return (
    <div>
      {currentPage !== steps.length ? (
        <div className="main"> 
          <NewInformation
            steps={steps}
            currentPage={currentPage}
            info={info}
            handleChangeInput={handleChangeInput}
          />
          <ChangePage
            activeButton={activeButton}
            handleClickChangePage={handleClickChangePage}
          />
        </div>
      ) : (
        <div>
          <FinalPage info={info}/>
        </div>
      )}
    </div>
  );
}

export default UserPersonalData;
