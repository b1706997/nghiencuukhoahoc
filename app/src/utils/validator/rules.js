const validation = {
    email: {
      presence: {
        message: '^Please enter an email address'
      },
      email: {
        message: '^Please enter a valid email address'
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 5,
        message: '^Password must be at least 5 characters'
      }
    },
    username: {
        presence: true,
        length: {
            minimum:3,
            message:'^Username must be at least 3 characters'
        }
      },
  }
  
  export default validation