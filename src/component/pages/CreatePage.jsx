import { Zoom } from "react-reveal";



const ConnectPage = () => {
  return (
    <div className="container">
      <div className="title">
        <h3>List Of Applicants</h3>
      </div>
      <div className="applicants--container">
        {applicants.map((applicant, index) => {
          return (
              <Zoom>
            <div className="details">
                <div className="person--container">
                  <div className="header">
                    <h6>
                      {" "}
                      {`Name: ${applicant.firstName}  ${applicant.lastName}`}
                    </h6>
                  </div>
                  <div className="state">
                    <p> {`State Of Origin: ${applicant.state}`} </p>
                  </div>
                </div>
            </div>
              </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectPage;
