import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center my-5 '>Learn something new</h3>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Question 1: what is cors?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            The full form of cors is Cross Origin Resource Sharing. It is an HTTP based security mechanism which is controlled and enforced by the client. It has been designed in response to the same origin policy that restricts how a website loaded by one origin can interact with a resource from another origin. It is used to allow some cross origin requests while rejecting others.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Question 2: Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Google Firebase is an application development platform. It allows to create iOS, Android, and Web apps.
                            <p>Benefits of firebase:</p>
                            <ul>
                                <li>Less technical and time saving</li>
                                <li>You can host and manage your app in the cloud</li>
                                <li>You can import dummy data from Google Sheets and use it temporarily to serve your app</li>
                                <li>It is pretty simple to connect and use built-in-third-party authentication providers, including Facebook, Twitter, Google and so on.</li>
                                <li>Firebase pricing is equally flexible</li>
                                <li>You can start on a free plan and can use primary features.</li>
                                <li>It is a good choice to deploy your project on the cloud quickly.</li>
                            </ul>


                            <h3>Other Options to implement authentication</h3>

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
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Question 3: How does the private route work?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            If any component is under private route component, then it can not accessed by unauthorized user. If the user logged in, then the user can enter into the private component.Otherwise the user will be redirected to the login page.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Question 4: What is Node? How does Node work?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            To perform data intensive tasks or real time analytics, node js can be used. Because it has asynchronous architecture and non blocking I/O features.

                            <p>Working procedures:</p>
                            It accepts the requests from the client side and sends the response, while working with the request node.js handles them with a single thread.The concept of threads are used by the node.js to operate I/O operations.It can handle concurrent requests with a single thread without blocking it for one request.
                            It works on two concept.
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