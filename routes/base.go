package routes

import "github.com/gin-gonic/gin"

func BaseRoute (c *gin.Context) {
  c.JSON(200, gin.H{
    "version": "0.0.1",
    "healthCheck": "Okay",
  })
}

