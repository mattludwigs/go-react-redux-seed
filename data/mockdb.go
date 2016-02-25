package data

import "github.com/mattludwigs/go-react-redux-seed/models"

func GetMockUsers() []*model.User {
  return []*model.User{
    &model.User{Username: "t.user", Password: "t.pass", Name: "T", Email: "t@gmail.com", Id: 1},
    &model.User{Username: "b.user", Password: "B.pass", Name: "B", Email: "B@gmail.com", Id: 2},
  }
}

func GetMockUser() *model.User {
  return &model.User{ Username: "t.user", Password: "t.pass", Name: "T", Email: "t@gmail.com"}
}
