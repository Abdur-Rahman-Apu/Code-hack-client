import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center my-5 blog-title '>Learn something new</h3>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Question 1: what is cors?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The full form of cors is Cross Origin Resource Sharing. It is an HTTP based security mechanism which is controlled and enforced by the client. It has been designed in response to the same origin policy that restricts how a website loaded by one origin can interact with a resource from another origin. It is used to allow some cross origin requests while rejecting others.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Question 2: Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Google Firebase is an application development platform. It allows to create iOS, Android, and Web apps.
                            <h5 className='my-2 fw-bold'>Benefits of firebase:</h5>
                            <ul>
                                <li>Less technical and time saving</li>
                                <li>You can host and manage your app in the cloud</li>
                                <li>You can import dummy data from Google Sheets and use it temporarily to serve your app</li>
                                <li>It is pretty simple to connect and use built-in-third-party authentication providers, including Facebook, Twitter, Google and so on.</li>
                                <li>Firebase pricing is equally flexible</li>
                                <li>You can start on a free plan and can use primary features.</li>
                                <li>It is a good choice to deploy your project on the cloud quickly.</li>
                            </ul>


                            <h5 className='fw-bold'>Other Options to implement authentication</h5>

                            <ul>
                                <li>Auth0</li>
                                <li>Passport</li>
                                <li>Keyloak</li>
                                <li>MongoDB</li>
                                <li>Okta</li>
                                <li>JSON Web Token</li>
                                <li>Amazon Cognito</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Question 3: How does the private route work?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            If any component is under private route component, then it can not accessed by unauthorized user. If the user logged in, then the user can enter into the private component. Otherwise the user will be redirected to the login page.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Question 4: What is Node? How does Node work?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            To perform data intensive tasks or real time analytics, node js can be used. Because it has asynchronous architecture and non blocking I/O features.

                            <p className='fw-bold my-2'>Working procedures:</p>
                            It accepts the requests from the client side and sends the response, while working with the request node.js handles them with a single thread.The concept of threads are used by the node.js to operate I/O operations. It can handle concurrent requests with a single thread without blocking it for one request.
                            It works on two concepts-
                            <ul>
                                <li>Asynchronous</li>
                                <li>Non-blocking I/O</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;