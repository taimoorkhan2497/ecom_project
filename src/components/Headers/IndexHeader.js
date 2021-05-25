
import React from "react";

// reactstrap components

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres3.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="container">
            <div className="title-brand">
              <h1 className="presentation-title">XARA fashion</h1>
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>

          </div>

      
        </div>

        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />

        <div className="row dropdownCustomcss">
        <div class="dropdown col-md-3">                                                                        
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expande  d="false"> countries </button>                       
        <div class="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
         <a class="dropdown-item" href="#">Foo</a>                                  
         <a class="dropdown-item" href="#">Thing</a>                          
         <a class="dropdown-item" href="#">Something</a>
         <a class="dropdown-item" href="#">Dudes</a>
         <a class="dropdown-item" href="#">Birds</a>
         <a class="dropdown-item" href="#">Nikes</a>
         <a class="dropdown-item" href="#">Marsh mellows</a>  
        <a class="dropdown-item" href="#">Apples</a>                                                             
       </div>  
      </div> 
    <div className="offset-md-3"></div>
      <div class="dropdown col-md-2">                                                                        
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expande  d="false"> languages </button>                       
      <div class="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
       <a class="dropdown-item" href="#">Foo</a>                                  
       <a class="dropdown-item" href="#">Thing</a>                          
       <a class="dropdown-item" href="#">Something</a>
       <a class="dropdown-item" href="#">Dudes</a>
       <a class="dropdown-item" href="#">Birds</a>
       <a class="dropdown-item" href="#">Nikes</a>
       <a class="dropdown-item" href="#">Marsh mellows</a>  
      <a class="dropdown-item" href="#">Apples</a>                                                             
     </div>  
    </div>
    <button type="button" class="btn btn-danger">Go</button>


    </div>

      </div>

      
     
    
    </>
  );
}

export default IndexHeader;
