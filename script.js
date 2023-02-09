let users = [] ;
const app = document.querySelector('.app');

function getUsers()
{
    fetch("https://randomuser.me/api/?results=20 ")
    .then((response) => response.json())
    .then((data) => {
        users = data.results;
        displayUsers(users);
    });
}

function displayUsers(users){
    // users.forEach((user) => console.log(user.name));
    // for (let index = 0; index < users.length; index++) {
    //     console.log(users[index].name);  
    // }
    // users.map((user) => console.log(user.name));
    users.map((user) => 
    {
        // console.log(user);
        const card = document.createElement('div');
        card.className = 'card';

        const genderIcon = document.createElement('i');
        if(user.gender === 'male')
        {
            genderIcon.className = 'fa-solid fa-mars male';
        }
        else{
            genderIcon.className = 'fa-solid fa-venus female';
        }
        card.appendChild(genderIcon);
        
        const img = document.createElement('img');
        img.src = `${user.picture.large}`;
        card.appendChild(img);
        
        const details = document.createElement('div');
        details.className = 'details';

        const firstname = document.createElement('span');
        firstname.className = 'firstname';
        firstname.textContent = user.name.first + " ";
        details.appendChild(firstname);

        const lastname = document.createElement('span');
        lastname.className = 'lastname';
        lastname.textContent = user.name.last.toUpperCase();
        details.appendChild(lastname);

        const email = document.createElement('a');
        email.className = 'email';
        email.textContent = user.email;
        details.appendChild(email);

        card.appendChild(details);
        

        app.appendChild(card);
    }
    );    
}

getUsers();