package routes

import (
  "github.com/mattludwigs/monarch/data"

  "github.com/gin-gonic/gin"
)

func GetAllUsers(c * gin.Context) {
  users := data.GetMockUsers()
  c.JSON(200, gin.H{
    "users": users,
  })
}

