import React from 'react';
import "./Loan_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../RangeSliderPlugIn/rSlider.css";
import RS from '../RangeSliderPlugIn/rSlider';
import $ from "jquery";
import { useEffect } from 'react';
function Loan_page() {
    
    
     function RsInit() {                

        var slider2 = new RS({
            target: '#slider2',
            values: [0, '5L', '10L', '15L', '20L', '25L'],
            range: false,
            set: [5],
            tooltip: true,
            onChange: function (vals) {
                $('#loan-ammount-slider-section').val(vals);
                console.log(vals);
            }
        });

        var slider3 = new RS({
            target: '#slider3',
            values: [0, 5, 10, 15, 20, 30],
            
            range: false,
            set: [5],
            tooltip: false,
            onChange: function (vals) {
                $('#loan-Tenure-slider-section').val(vals);
                console.log(vals);
            }
        });

       
    };

    useEffect(() => {
        RsInit()
      });

  return (
    <div>
    <div className="container-fluid py-1 custom-attr-add-css">
            <div className="row">
                <div className="col-md-4">
                    <div className="image-section-loan-req">
                        <img src="./Loan-req-img.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="Loan-request-container-main-content">
                        <div className="heading-container">
                    
                            <h1 className="provide-content h1 custom-service-provide">Loan Request</h1>
                        </div>
                        <div className="navigation-of-loan-req">
                           
                        </div>
                        <div className="loan-ammount-slider">
                            <div className="slider-sect">
                                <div className="text-container-loan-ammount d-flex">
                                    <div className="text-lone">
                                        Personal Loan Amount
                                    </div>
                                    <div className="text-slider d-flex">

                                        <input type="text" name="slider2" id="loan-ammount-slider-section"/>
                                        <p className="type-of-content">R</p>
                                    </div>

                                </div>
                            </div>

                            <div className="slider-container-range">
                                <input type="text" id="slider2" className="slider" />
                            </div>
                        </div>
                        <div className="loan-teunue-slider">
                            <div className="slider-sect">
                                <div className="text-container-loan-ammount d-flex">
                                    <div className="text-lone">
                                        Loan Tenure
                                    </div>
                                    <div className="text-slider d-flex">

                                        <input type="text" name="slider2" id="loan-Tenure-slider-section"/>
                                        <p className="type-of-content loan-tenure YR">YR</p>
                                        <p className="type-of-content loan-tenure MO">MO</p>
                                    </div>

                                </div>
                            </div>

                            <div className="slider-container-range">
                                <input type="text" id="slider3" className="slider" />
                            </div>

                        </div>
                        <div className="calculate-emi">

                        </div>
                        <div className="button-of-loan-req">

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Loan_page;






