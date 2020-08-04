import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter dir={"rtl"} className="bg-dark font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="titl text-center text-light">وبلاگ زمپ کین</h5>
            <p className="text-light text-center">
              هم خویش را بیگانه کن هم خانه را ویرانه کن <br /> و آنگه بیا با عاشقان هم خانه شو هم خانه شو
            </p>
          </MDBCol>
          <MDBCol className="text-center" md="3">
            <h5 className="title text-center text-light">لینک ها</h5>
            <ul>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  صفحه اصلی
                </a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  کاربران
                </a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  پست ها
                </a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  محصولات
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className="text-center" md="3">
            <h5 className="title text-center text-light">لینک ها</h5>
            <ul>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  صفحه اصلی
                </a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  کاربران
                </a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  پست ها
                </a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">
                  محصولات
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer className="text-light" fluid>
          پناهی آذر - ۱۳۹۹ &copy;
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
