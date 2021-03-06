
class APIManager {
    // user section

    getUser(id) {
        fetch(`http://localhost:8088/users/${id}`)
        .then(x => x.json())
    }

    getAll() {
        fetch("http://localhost:8088/users")
        .then(x => x.json())
      }

      deleteUser(id) {
        return fetch(`http://localhost:8088/users/${id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
          body: JSON.stringify()
        }).then(data => data.json())
      }

      post(newUser) {
        return fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        }).then(data => data.json())
      }
}



