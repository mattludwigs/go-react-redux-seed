package routes

import (
  "github.com/mattludwigs/go-react-redux-seed/data"

  "github.com/gin-gonic/gin"
)

func GetAllUsers(c * gin.Context) {
  users := data.GetMockUsers()
  c.JSON(200, gin.H{
    "users": users,
  })
}

