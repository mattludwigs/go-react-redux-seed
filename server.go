package main

import (

  "github.com/mattludwigs/monarch-money/routes"
  "github.com/mattludwigs/monarch-money/data"
  "github.com/mattludwigs/monarch-money/models"

  "github.com/gin-gonic/gin"
)

func main() {
  // @TODO: Move into go routine
  app := gin.Default()
  app.Static("/app", "./client")

  app.GET("/api", routes.BaseRoute)

  // Users API
  app.GET("/api/users", routes.GetAllUsers)
  app.GET("/api/users/:id", func(c *gin.Context) {
    user := data.GetMockUser()
    c.JSON(200, gin.H{
      "data": user,
    })
  })

  // Session API
  app.POST("/api/sessions", func(c *gin.Context) {
    var user model.User

    if c.BindJSON(&user) == nil {
      c.JSON(201, gin.H{
        "session": "created",
        "user": user,
      })
    }

  })

  app.Run(":3000")
}
