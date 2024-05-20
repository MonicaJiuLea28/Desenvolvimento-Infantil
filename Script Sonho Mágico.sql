create database SonhoMagico;
use SonhoMagico;

create table Crianca(
idCrianca int primary key,
dtNasc date,
genero varchar(45),
email varchar(45),
senha char(8)
);

create table Livro(
idLivro int primary key,
qtdlivro varchar(45),
generoLivro varchar(45)
);

create table Biblioteca(
fkCrianca int,
constraint CriancaBiblioteca foreign key (fkCrianca)
references Crianca(idCrianca),
fkLivro int,
constraint LivroBiblioteca foreign key (fkLivro)
references Livro (idLivro)
);

create table Comentario(
idComentario int primary key,
nome varchar(45),
email varchar(45),
descricao varchar(45),
fkLivro int,
constraint LivroComentario foreign key (fkLivro)
references Livro (idLivro)
);



