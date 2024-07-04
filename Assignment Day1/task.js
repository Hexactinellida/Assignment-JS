//QUESTION 1


let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Walter Isaacson',
        title: 'Steve Jobs',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

    console.log(library);
    library.forEach(function(book) {
        console.log('Author: ' + book.author);
        console.log('Title: ' + book.title);
        console.log('Reading Status: ' + book.readingStatus);
        console.log('_');
    });


    
    
    
    /* QUESTION 2 */
    console.log('__');

    function checkInteger(num) {
        return Number.isInteger(num);
      }
      try {
        const isIntegerone = checkInteger(7);
        const isIntegertwo = checkInteger(1.8);
      
        if (isIntegerone) {
          console.log("7 is an integer");
        }
      
        if (!isIntegertwo) {
          console.log("1.8 is not an integer");
        }
      } catch (error) {
      
      }



    //   Question 3

    function delayCallback(callback) {
        
        setTimeout(callback, 2000);
        
        }
        console.log('__');
        console.log('__');
        delayCallback(() => {
            console.log('CALLBACK');
        console.log('This message is delayed by 2 seconds');
        
        });


        // QUESTION 4
    
        console.log('__');
        console.log('__');
        function fetchUserProfile(userId) {
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (userId === 1) {
                        resolve({
                            
                            userId: 1,
                            name: 'Nyan Cat',
                            email: 'NyanCatMeowMeow@catmail.com'
                        });
                    } else {
                        reject('User not found');
                    }
                }, 2000); 
            });
        }
        
        function fetchUserPosts(userId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (userId === 1) {
                        resolve([
                            { id: 1, body: 'Tauko' },
                            { id: 2, body: 'Puchhar' }
                        ]);
                    } else {
                        reject(new Error('User posts not found'));
                    }
                }, 1500); 
            });
        }
        
        function getUserData(userId) {
            return new Promise((resolve, reject) => {
                fetchUserProfile(userId)
                    .then(profile => {
                        return fetchUserPosts(userId)
                            .then(posts => {
                                const userData = {
                                    profile,
                                    posts
                                };
                                resolve(userData);
                            })
                            .catch(error => {
                                reject(error);
                            });
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
        
        getUserData(1)
    .then(userData => {
        console.log('User data:');
        console.log(`Name: ${userData.profile.name}`);
        console.log(`Email: ${userData.profile.email}`);
        console.log('Posts:');
        userData.posts.forEach(post => {
            console.log(`  - ${post.body}`);
        });
    })
    .catch(error => {
        console.error('Error fetching user data:', error.message);
    });
        

