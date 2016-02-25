package model

type User struct {
  Id       int    `json:"id"`
  Username string `json:"username"`
  Password string `json:"password"`
  Name     string `json:"name"`
  Email    string `json:"email"`
}
