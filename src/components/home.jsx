import React, { Component } from 'react';
import homeImg from '../assets/home.png';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="container m-2">
                    <div className="row">
                        <div className="col-6">
                            <br /><br /><br />
                            <h2 className="text-muted">Online market</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores commodi vero! Est architecto excepturi, possimus iure cum esse laborum dicta officia vitae aperiam harum repellendus perferendis repudiandae. Voluptatem, quod.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod repellendus modi, natus, voluptas rerum quia molestias .
                            </p>
                        </div>
                        <div className="col-6">
                            <br /><br />
                            <img width="470" src={homeImg} alt="homeImg" />
                        </div>
                    </div>
                </div>    
            </>
        );
    }
}
 
export default Home;