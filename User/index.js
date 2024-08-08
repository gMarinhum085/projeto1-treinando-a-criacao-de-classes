class User {           
    constructor(fullname, email, password) {
      this.fullname = fullname
      this.email = email
      this.password = password
    }
    login(email, password) {
      if (this.email === email && this.password === password) {
        console.log(`${this.fullname} Login sucedido!`)
      } else {
        console.log(`${this.fullname} O login falhou.`)
      }
    }
}

  const user = new User('John', 'john@gmail.com', '1234567')
  user.login(email,password)
