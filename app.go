package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
)

// App struct
type App struct {
	ctx context.Context
}

type Passwords struct {
	Id       int    `json:"id"`
	Url      string `json:"url"`
	Login    string `json:"login"`
	Password string `json:"password"`
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) GetPass() []Passwords {
	file, err := os.Open("passwords.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	var passwords []Passwords // Объявляем срез для хранения нескольких объектов
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&passwords) // Декодируем JSON в срез
	if err != nil {
		log.Fatal(err)
	}
	return passwords // Возвращаем срез паролей
}
