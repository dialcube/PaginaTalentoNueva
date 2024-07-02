/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     26/06/2024 07:44:44                          */
/*==============================================================*/


drop table if exists COMPONENTES;

drop table if exists CURSOS;

drop table if exists CURSO_COMPONENTE;

drop table if exists CURSO_SESIONES;

drop table if exists NOTAS_CURSO;

drop table if exists SESIONES_USUARIO;

drop table if exists USUARIOS;

drop table if exists USUARIO_CURSOS;

/*==============================================================*/
/* Table: COMPONENTES                                           */
/*==============================================================*/
create table COMPONENTES
(
   IdComponente         integer not null auto_increment,
   NombreComponente     varchar(40) binary,
   primary key (IdComponente)
);

/*==============================================================*/
/* Table: CURSOS                                                */
/*==============================================================*/
create table CURSOS
(
   IdCurso              integer not null auto_increment,
   Nombre               varchar(30),
   Descrpcion           varchar(100),
   Nivel                varchar(20),
   Horas                integer,
   Activo               boolean,
   primary key (IdCurso)
);

/*==============================================================*/
/* Table: CURSO_COMPONENTE                                      */
/*==============================================================*/
create table CURSO_COMPONENTE
(
   IdCurso              integer not null,
   IdComponente         integer not null,
   IdUsuario            integer,
   Activo               boolean,
   primary key (IdCurso, IdComponente)
);

/*==============================================================*/
/* Table: CURSO_SESIONES                                        */
/*==============================================================*/
create table CURSO_SESIONES
(
   IdCurso              integer not null,
   IdSesion             integer not null,
   IdComponente         integer,
   FechaSesion          date,
   Horario              varchar(40),
   Activa               boolean,
   NombreSesion         varchar(40),
   DescripcionSesion    varchar(100),
   LinkSesion           varchar(100),
   Estado               varchar(20),
   primary key (IdCurso, IdSesion)
);

/*==============================================================*/
/* Table: NOTAS_CURSO                                           */
/*==============================================================*/
create table NOTAS_CURSO
(
   IdCurso              integer not null,
   IdComponente         integer not null,
   IdUsuario            integer not null,
   Nota1                decimal(4,1),
   Nota2                decimal(4,1),
   Nota3                decimal(4,1),
   NotaFinal            decimal(4,1),
   primary key (IdCurso, IdComponente, IdUsuario)
);

/*==============================================================*/
/* Table: SESIONES_USUARIO                                      */
/*==============================================================*/
create table SESIONES_USUARIO
(
   IdCurso              integer not null,
   IdSesion             integer not null,
   IdUsuario            integer not null,
   Asistio              boolean,
   HoraIngreso          datetime,
   HoraSalida           datetime,
   primary key (IdCurso, IdSesion, IdUsuario)
);

/*==============================================================*/
/* Table: USUARIOS                                              */
/*==============================================================*/
create table USUARIOS
(
   IdUsuario            integer not null auto_increment,
   Tipo_Id              varchar(2),
   Identificacion       decimal,
   Nombres              varchar(40),
   Apellidos            varchar(40),
   Email                varchar(40),
   Password             varchar(30),
   FechaNacimiento      date,
   Rol                  varchar(20),
   primary key (IdUsuario)
);

/*==============================================================*/
/* Table: USUARIO_CURSOS                                        */
/*==============================================================*/
create table USUARIO_CURSOS
(
   IdCurso              integer not null,
   IdUsuario            integer not null,
   FechaInscripcion     date,
   Activo               boolean,
   primary key (IdCurso, IdUsuario)
);

alter table CURSO_COMPONENTE add constraint FK_REFERENCE_7 foreign key (IdCurso)
      references CURSOS (IdCurso) on delete restrict on update restrict;

alter table CURSO_COMPONENTE add constraint FK_REFERENCE_8 foreign key (IdComponente)
      references COMPONENTES (IdComponente) on delete restrict on update restrict;

alter table CURSO_COMPONENTE add constraint FK_REFERENCE_9 foreign key (IdUsuario)
      references USUARIOS (IdUsuario) on delete restrict on update restrict;

alter table CURSO_SESIONES add constraint FK_REFERENCE_3 foreign key (IdCurso)
      references CURSOS (IdCurso) on delete restrict on update restrict;

alter table CURSO_SESIONES add constraint FK_REFERENCE_6 foreign key (IdComponente)
      references COMPONENTES (IdComponente) on delete restrict on update restrict;

alter table NOTAS_CURSO add constraint FK_REFERENCE_10 foreign key (IdCurso, IdComponente)
      references CURSO_COMPONENTE (IdCurso, IdComponente) on delete restrict on update restrict;

alter table NOTAS_CURSO add constraint FK_REFERENCE_11 foreign key (IdUsuario)
      references USUARIOS (IdUsuario) on delete restrict on update restrict;

alter table SESIONES_USUARIO add constraint FK_REFERENCE_4 foreign key (IdCurso, IdSesion)
      references CURSO_SESIONES (IdCurso, IdSesion) on delete restrict on update restrict;

alter table SESIONES_USUARIO add constraint FK_REFERENCE_5 foreign key (IdUsuario)
      references USUARIOS (IdUsuario) on delete restrict on update restrict;

alter table USUARIO_CURSOS add constraint FK_REFERENCE_1 foreign key (IdCurso)
      references CURSOS (IdCurso) on delete restrict on update restrict;

alter table USUARIO_CURSOS add constraint FK_REFERENCE_2 foreign key (IdUsuario)
      references USUARIOS (IdUsuario) on delete restrict on update restrict;

