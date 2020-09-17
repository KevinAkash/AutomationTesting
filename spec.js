//   AUTOMATION TESTING FOR STUDENT SIDE LOGIN

// EMAIL PAGE

// UI TESTING - EMAIL PAGE

describe('check the UI features for correctness',function(){
    it('should check the title of the page',function(){
        browser.get('https://pscollege841.examly.net/');
        browser.waitForAngularEnabled(false);
        browser.sleep(3000);
        if((browser.getCurrentUrl())!="https://pscollege841.examly.net/login")   // Redirects to the login page if any other page opens by mistake 
        {
            browser.get('https://pscollege841.examly.net/login');
            browser.sleep(10000);
        }

        element(by.className("crisp-bz13r8 crisp-i1yn7v")).isPresent().then(function (results){  // Closes the chat box,if it is open
            if(results){
                element(by.className("crisp-bz13r8 crisp-i1yn7v")).click(); 
        }
        })

        browser.sleep(2000);
        expect(browser.getTitle()).toEqual("PS College");   //Checks the title of the page
});

    it('should check for the correctness of the college name',function(){      
        var value=element(by.className("logoContainer"));                       //Selects the container that holds college name
        expect(value.getText()).toEqual("PS College Of Engineering");
    });

    it('should check for login text',function(){
        var value=element(by.className("head position-top-6px"));               //Selects the element holding 'Login' text
        expect(value.getText()).toEqual("Login");
    });

    it('should check for the next button',function(){
        expect(element(by.id("lgnNext0")).getText()).toEqual("Next");           //Checks the text in the next button
    });

    it('should check for the presence of the left arrow',function(){
        expect(element(by.className("icon icon-angle-left angle-left-pos")).isPresent()).toBe(true);    //Checks the presence of left arrow at top
    });

    it('should check for the presence of chat/support icon',function(){
        expect(element(by.className("crisp-16qgsyi")).isPresent()).toBe(true);
    });

    it('should check for the user icon to be present in the email textbox',function(){
        expect(element(by.className("icon-person inputIcons")).isPresent()).toBe(true);
    });

    it('should check for the user icon to be present in the middle of the page',function(){
        expect(element(by.className("icon icon-person personIcon")).isPresent()).toBe(true);
    });

    it('should check for the image to be present in the page',function(){
        expect(element(by.className("container login70Box")).isPresent()).toBe(true);
    });
})

// FUNCTIONAL TESTING - EMAIL PAGE

describe('Check for correct user name or email',function(){
    it('should prompt when email field is empty and user clicks elsewhere',function(){
        browser.get('https://pscollege841.examly.net/login');
        browser.waitForAngularEnabled(false);
        browser.sleep(10000);
        /*element(by.className("crisp-bz13r8 crisp-i1yn7v")).isPresent().then(function (results){
            if(results){
                element(by.className("crisp-bz13r8 crisp-i1yn7v")).click(); 
        }
        })*/
        browser.sleep(5000);
        element(by.id("email")).sendKeys("");                      //Sends the text "" to email text box
        element(by.className("container logo")).click();           //Clicks on some other part on the webpage 
        browser.sleep(2000);
        var prom=element(by.className("errorInput"));
        expect(prom.getText()).toEqual("Email required");
    });

    beforeEach(function(){                                         //This function gets executed before every other function 
        browser.get('https://pscollege841.examly.net/login');
        browser.waitForAngularEnabled(false);
        browser.sleep(10000);
        
        /*element(by.className("crisp-1vzg1qq")).isPresent().then(function (results){
            if(results){
                element(by.className("crisp-1vzg1qq")).click(); 
        }
        })*/
    });

    it('should prompt when user clicks the next button directly without giving email',function(){
        element(by.id("lgnNext0")).click();
        browser.sleep(6000);
        //Checking for error message (uses xpath to find the message)
        var msg=element(by.xpath("/html/body/app-root/div/app-login/div/div[2]/app-dynamic/div/div[2]/div[2]/app-form-builder/div/form/div[1]/field-builder/div/div/textbox/div[2]/div/div"));
        expect(msg.getText()).toEqual("Email required");
    })

    it('should prompt when email is not in correct format',function(){
        element(by.id("email")).sendKeys("abc");
        element(by.id("lgnNext0")).click();
        browser.sleep(10000);
        //Checing for error message (uses xpath)
        var prom=element(by.xpath("html/body/app-root/div/app-login/div/div[2]/app-dynamic/div/div[2]/div[2]/app-form-builder/div/form/div[1]/field-builder/div/div/textbox/div[2]/div/div"));
        expect(prom.getText()).toEqual("Enter valid email");
    });

    it('should prompt when a non-registered email is typed',function(){                 
        element(by.id("email")).sendKeys("jack@gmail.com");
        element(by.id("lgnNext0")).click();
        browser.sleep(10000);
        var prom=element(by.className("alignCenter"));
        var prom_1=element(by.className("notFoundcolor"));                              //Checks for error messages found
        expect(prom.getText()).toEqual("Your Account not found");
        expect(prom_1.getText()).toEqual("May be go back and try a different account"); //Expects the correct statement to be displayed
    });

    it('should successfully move to the password page',function()
    {
        element(by.id("email")).sendKeys("studentpractice1@examly.in");
        element(by.id("lgnNext0")).click();                                             //Clicks the next button after successfuly entering the email
        browser.sleep(14000);
        expect(browser.getCurrentUrl()).toEqual("https://pscollege841.examly.net/pwd")  // Checks that the webpage as moved to password page by extracting the url
        browser.sleep(2000);
    });

    
});

// PASSWORD PAGE

// UI TESTING - PASSWORD PAGE

describe('checK the UI features of the password page for correctness',function(){
    it('should check the title of the page',function(){
        browser.get('https://pscollege841.examly.net/login');
        browser.waitForAngularEnabled(false);
        browser.sleep(12000);
        browser.sleep(3000);
        /*element(by.className("crisp-bz13r8 crisp-i1yn7v")).isPresent().then(function (results){
            if(results){
                element(by.className("crisp-bz13r8 crisp-i1yn7v")).click(); 
        }
        })
        
        element(by.className("crisp-1vzg1qq")).isPresent().then(function (results){
            if(results){
                element(by.className("crisp-1vzg1qq")).click(); 
        }
        })*/
        element(by.id("email")).sendKeys("studentpractice1@examly.in");    /*Loads the password page by entering correct email*/
        element(by.id("lgnNext0")).click();                                     
        browser.sleep(12000);
        expect(browser.getTitle()).toEqual("PS College");
    });

    it('should check for the image to be present in the page',function(){
        expect(element(by.className("container login70Box")).isPresent()).toBe(true);  //Checks for the image to be present on the left side
    });

    it('should check the correctness of the college name',function(){
        var value=element(by.className("logoContainer"));                   //Selects the element that contains college name in it
        expect(value.getText()).toEqual("PS College Of Engineering");
    });

    it('should check for the salutation text to be present',function(){
        expect(element(by.className("head position-top-6px")).isPresent()).toBe(true);   //Checks for the salutation container
    });

    it('should check for the presence of left arrow mark',function(){
        expect(element(by.className("icon icon-angle-left angle-left-pos")).isPresent()).toBe(true);
    });

    it('should check for the presence of profile picture in the page',function(){
        expect(element(by.className("circle")).isPresent()).toBe(true);
    });

    it('should check for the lock/unlock icon to be present',function(){
        expect(element(by.className("icon-ios-locked inputIcons")).isPresent()).toBe(true);
    });
    it('should check for the Forgot password text to be present',function(){
        expect(element(by.id("forgot")).isPresent()).toBe(true);                    //Checks for the forgot password text container
    });

    it('should check for the login button',function(){
        expect(element(by.id("lgnLogin0")).getText()).toEqual("Login");            //Checks for the spelling of "Login" in login button
    });

    it('should check for the presence of chat/support icon',function(){
        expect(element(by.className("crisp-16qgsyi")).isPresent()).toBe(true);
    });

})

// FUNCTIONAL TESTING - PASSWORD PAGE

describe('Check for the correct password',function(){
    it('should verify that password is masked',function(){
        browser.get('https://pscollege841.examly.net/login');
        browser.waitForAngularEnabled(false);
        browser.sleep(12000);
        /*element(by.className("crisp-bz13r8 crisp-i1yn7v")).isPresent().then(function (results){
            if(results){
                element(by.className("crisp-bz13r8 crisp-i1yn7v")).click(); 
        }
        })*/
        browser.sleep(5000);
        element(by.id("email")).sendKeys("studentpractice1@examly.in");
        browser.sleep(2000);
        element(by.id("lgnNext0")).click();                                             //Moves to password page by entering the rigt email
        browser.sleep(10000);
        element(by.id("password")).sendKeys("studentpractice1");
        browser.sleep(4000);
        var pass=element(by.id("password"));
        expect(pass.getAttribute("type")).toEqual("password");                          //NOTE: if type of the element is "password", it means that the text entered there is masked
    });

    beforeEach(function(){                                                              //Executes before every function 
        browser.get('https://pscollege841.examly.net/login');
        browser.waitForAngularEnabled(false);
        browser.sleep(12000);
        /*element(by.className("crisp-bz13r8 crisp-i1yn7v")).isPresent().then(function (results){
            if(results){
                element(by.className("crisp-bz13r8 crisp-i1yn7v")).click(); 
        }
        })
        
       /* element(by.className("crisp-1vzg1qq")).isPresent().then(function (results){
            if(results){
                element(by.className("crisp-1vzg1qq")).click(); 
        }
        })*/
        browser.sleep(1000);
        element(by.id("email")).sendKeys("studentpractice1@examly.in");
        element(by.id("lgnNext0")).click();                                             //Moves to the password page
        browser.sleep(10000);
    });

    

    it('should show the password when the unlock icon is clicked',function(){
        element(by.id("password")).sendKeys("studentpractice1");
        browser.sleep(4000);
        element(by.className("icon-ios-locked inputIcons")).click();                    //Clciks on the unlock icon
        browser.sleep(3000);
        var pass=element(by.id("password"));
        expect(pass.getAttribute("type")).toEqual("text");                              //Now, the type of the element is changed to "text" symbolifying that it is not masked anymore
    });

    it('should prompt the user when the password field is empty',function(){            
        element(by.id("password")).sendKeys("");
        browser.sleep(4000);
        element(by.id("lgnLogin0")).click();
        browser.sleep(2000);
        var msg = element(by.className("errorInput"));
        expect(msg.getText()).toEqual("Password required");                            //Checks for the error messsage
    });

    it('should prompt the user when wrong password is entered',function(){
        element(by.id("password")).sendKeys("abc");                                    //Enters a wrong password 
        browser.sleep(3000);
        element(by.id("lgnLogin0")).click();
        browser.sleep(6000);
        var msg = element(by.className("errorInput"));
        expect(msg.getText()).toEqual("Incorrect Password");                           //Checks for the error message 
    });
    
    it('should check the working of "Forgot Password"',function(){
        element(by.id("forgot")).click();                                              //It clicks "Forgot password?" 
        browser.sleep(3000);
        var msg=element(by.xpath("/html/body/app-root/div/app-login/div/div[2]/app-dynamic/div/div/div[2]/div"));       //Checks for the error message
        expect(msg.getText()).toEqual("Reset password link has been sent to your Email ID");
        element(by.xpath("/html/body/app-root/div/app-login/div/div[2]/app-dynamic/div/div/div[3]/app-button/button")).click();
    });

    it('should login when the password is correct',function(){
        browser.sleep(2000);
        if((browser.getCurrentUrl())!="https://pscollege841.examly.net/login")   // Redirects to the login page if any other page opens by mistake 
        {
            browser.get('https://pscollege841.examly.net/login');
            browser.sleep(10000);
        }
        element(by.id("password")).sendKeys("studentpractice1");
        browser.sleep(3000);
        element(by.id("lgnLogin0")).click();                                        //It gives the correct password
        browser.sleep(17000);                                                       //Waits for 17 seconds for the page to be loaded
        expect(browser.getCurrentUrl()).toEqual("https://pscollege841.examly.net/dashboard");  //Checks the url to be changed from the password page. Since the user is already registered, it moves to the dashboard, else it would have gone to registration page.
    });
    
})