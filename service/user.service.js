const users = [];

exports.insertUser = (user) => {
    
    const index = users.length + 1
    
    users.push({ 'id':index  ,...user});
    
    console.log(users);
}

exports.viewAllUsers = () => users.map((u) => JSON.stringify(u))

exports.findUser = (email, password) => users.find((u) => 
u.email === email && u.password === password);

exports.findUserbyId = (id) => users.find((u) => u.id === id);

