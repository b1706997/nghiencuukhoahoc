/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     3/31/2020 3:35:20 PM                         */
/*==============================================================*/
use nghiencuukhoahoc;

drop table if exists ACCOUNT;

drop table if exists COMMENT_RATING;

drop table if exists CONVERSATION;

drop table if exists CONVERSATION_LINK;

drop table if exists DIADIEM;

drop table if exists DIADIEMLINK;

drop table if exists MSG;

drop table if exists PERSON;

drop table if exists STAGE;

drop table if exists TOURGUIDE;

drop table if exists TOURGUIDE_COMMENT;

drop table if exists TOURINSTANCE;

drop table if exists TOURINVITE;

drop table if exists TOURINVITE_DETAIL;

drop table if exists TOURLOG;

drop table if exists USER;

/*==============================================================*/
/* Table: ACCOUNT                                               */
/*==============================================================*/
create table ACCOUNT
(
   ACCOUNT_ID           varchar(36) not null,
   PERSON_ID            varchar(36) not null,
   UNAME                varchar(50) not null,
   PSW                  varchar(50) not null,
   EMAIL                varchar(50) not null,
   TOURGUIDE            boolean not null,
   USER                 boolean not null,
   BANK                 char(10),
   TRUSTING_SCORE       int not null,
   primary key (ACCOUNT_ID)
);
 select * from account;
/*==============================================================*/
/* Table: COMMENT_RATING                                        */
/*==============================================================*/
create table COMMENT_RATING
(
   COMMENT_ID           varchar(36) not null,
   DIADIEM_ID           varchar(36),
   USER_ID              varchar(36),
   primary key (COMMENT_ID)
);

/*==============================================================*/
/* Table: CONVERSATION                                          */
/*==============================================================*/
create table CONVERSATION
(
   CONVER_ID            varchar(36) not null,
   NAME                 varchar(50) not null,
   CREATED_TIME         time not null,
   primary key (CONVER_ID)
);

/*==============================================================*/
/* Table: CONVERSATION_LINK                                     */
/*==============================================================*/
create table CONVERSATION_LINK
(
   CONVER_ID            varchar(36),
   ACCOUNT_ID           varchar(36)
);

/*==============================================================*/
/* Table: DIADIEM                                               */
/*==============================================================*/
create table DIADIEM
(
   DIADIEM_ID           varchar(36) not null,
   NAME                 varchar(50) not null,
   DESCRIPTION          varchar(200),
   primary key (DIADIEM_ID)
);

/*==============================================================*/
/* Table: DIADIEMLINK                                           */
/*==============================================================*/
create table DIADIEMLINK
(
   DIADIEMLINK_ID       varchar(36) not null,
   INSTANCE_ID          varchar(36),
   DIADIEM_ID           varchar(36),
   NUMBER               smallint,
   primary key (DIADIEMLINK_ID)
);

/*==============================================================*/
/* Table: MSG                                                   */
/*==============================================================*/
create table MSG
(
   MSG_ID               varchar(36) not null,
   ACCOUNT_ID           varchar(36),
   CONVER_ID            varchar(36),
   CONTENT              varchar(200),
   CREATED_TIME         time,
   primary key (MSG_ID)
);

/*==============================================================*/
/* Table: PERSON                                                */
/*==============================================================*/
create table PERSON
(
   PERSON_ID            varchar(36) not null,
   NAME                 varchar(50),
   BIRTHDAY             time,
   PHONE                varchar(20),
   NATION               varchar(30),
   ADDRESS              varchar(100),
   GENDER               boolean,
   primary key (PERSON_ID)
);

/*==============================================================*/
/* Table: STAGE                                                 */
/*==============================================================*/
create table STAGE
(
   STAGE_ID             char(10) not null,
   STAGE                varchar(20) not null,
   DESCRIPTION          varchar(200),
   primary key (STAGE_ID)
);

/*==============================================================*/
/* Table: TOURGUIDE                                             */
/*==============================================================*/
create table TOURGUIDE
(
   TOURGUIDE_ID         varchar(36) not null,
   ACCOUNT_ID           varchar(36) not null,
   CMND                 varchar(20) not null,
   LANGUAGE_ABILITY     int not null,
   PERSONALITY          int not null,
   KNOWLEDGE            int not null,
   primary key (TOURGUIDE_ID)
);

/*==============================================================*/
/* Table: TOURGUIDE_COMMENT                                     */
/*==============================================================*/
create table TOURGUIDE_COMMENT
(
   TGCOMMENT_ID         varchar(36) not null,
   TOURGUIDE_ID         varchar(36),
   USER_ID              varchar(36),
   CONTENT              varchar(200) not null,
   LANGUAGE_ABILITY     int not null,
   PERSONALITY          int not null,
   KNOWLEDGE            int not null,
   primary key (TGCOMMENT_ID)
);

/*==============================================================*/
/* Table: TOURINSTANCE                                          */
/*==============================================================*/
create table TOURINSTANCE
(
   INSTANCE_ID          varchar(36) not null,
   USER_ID              varchar(36) not null,
   START_TIME           datetime not null,
   PEOPLE               smallint not null,
   PAY_ADVANCE          boolean not null,
   CREATED_TIME         datetime not null,
   primary key (INSTANCE_ID)
);

/*==============================================================*/
/* Table: TOURINVITE                                            */
/*==============================================================*/
create table TOURINVITE
(
   TOURINVITE_ID        varchar(36) not null,
   TOURGUIDE_ID         varchar(36),
   INSTANCE_ID          varchar(36),
   PRICE                real not null,
   primary key (TOURINVITE_ID)
);

/*==============================================================*/
/* Table: TOURINVITE_DETAIL                                     */
/*==============================================================*/
create table TOURINVITE_DETAIL
(
   TOURINVITEDETAIL_ID  varchar(36) not null,
   TOURINVITE_ID        varchar(36) not null,
   DIADIEMLINK_ID       varchar(36) not null,
   START_TIME           datetime not null,
   END_TIME             datetime not null,
   DURATION             time not null,
   primary key (TOURINVITEDETAIL_ID)
);

/*==============================================================*/
/* Table: TOURLOG                                               */
/*==============================================================*/
create table TOURLOG
(
   TOURLOG_ID           varchar(36) not null,
   TOURINVITE_ID        varchar(36),
   STAGE_ID             char(10),
   CREATED_TIME         datetime not null,
   primary key (TOURLOG_ID)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   USER_ID              varchar(36) not null,
   ACCOUNT_ID           varchar(36),
   PASSPORT             varchar(20) not null,
   primary key (USER_ID)
);

alter table ACCOUNT add constraint Identify foreign key (PERSON_ID)
      references PERSON (PERSON_ID) on delete restrict on update restrict;

alter table COMMENT_RATING add constraint Onn foreign key (DIADIEM_ID)
      references DIADIEM (DIADIEM_ID) on delete restrict on update restrict;

alter table COMMENT_RATING add constraint CommentBy foreign key (USER_ID)
      references USER (USER_ID) on delete restrict on update restrict;

alter table CONVERSATION_LINK add constraint Included foreign key (ACCOUNT_ID)
      references ACCOUNT (ACCOUNT_ID) on delete restrict on update restrict;

alter table CONVERSATION_LINK add constraint ChatRoom foreign key (CONVER_ID)
      references CONVERSATION (CONVER_ID) on delete restrict on update restrict;

alter table DIADIEMLINK add constraint BelongTo foreign key (INSTANCE_ID)
      references TOURINSTANCE (INSTANCE_ID) on delete restrict on update restrict;

alter table DIADIEMLINK add constraint DiaDiem foreign key (DIADIEM_ID)
      references DIADIEM (DIADIEM_ID) on delete restrict on update restrict;

alter table MSG add constraint SentBy foreign key (ACCOUNT_ID)
      references ACCOUNT (ACCOUNT_ID) on delete restrict on update restrict;

alter table MSG add constraint SendTo foreign key (CONVER_ID)
      references CONVERSATION (CONVER_ID) on delete restrict on update restrict;

alter table TOURGUIDE add constraint FK_REFERENCE_7 foreign key (ACCOUNT_ID)
      references ACCOUNT (ACCOUNT_ID) on delete restrict on update restrict;

alter table TOURGUIDE_COMMENT add constraint onn1 foreign key (TOURGUIDE_ID)
      references TOURGUIDE (TOURGUIDE_ID) on delete restrict on update restrict;

alter table TOURGUIDE_COMMENT add constraint CommentByUser foreign key (USER_ID)
      references USER (USER_ID) on delete restrict on update restrict;

alter table TOURINSTANCE add constraint WhoPosted foreign key (USER_ID)
      references USER (USER_ID) on delete restrict on update restrict;

alter table TOURINVITE add constraint InviteSentBy foreign key (TOURGUIDE_ID)
      references TOURGUIDE (TOURGUIDE_ID) on delete restrict on update restrict;

alter table TOURINVITE add constraint ReplyTo foreign key (INSTANCE_ID)
      references TOURINSTANCE (INSTANCE_ID) on delete restrict on update restrict;

alter table TOURINVITE_DETAIL add constraint Describee foreign key (TOURINVITE_ID)
      references TOURINVITE (TOURINVITE_ID) on delete restrict on update restrict;

alter table TOURINVITE_DETAIL add constraint ReplyInDetail foreign key (DIADIEMLINK_ID)
      references DIADIEMLINK (DIADIEMLINK_ID) on delete restrict on update restrict;

alter table TOURLOG add constraint CreatedBy foreign key (TOURINVITE_ID)
      references TOURINVITE (TOURINVITE_ID) on delete restrict on update restrict;

alter table TOURLOG add constraint AtWhichStage foreign key (STAGE_ID)
      references STAGE (STAGE_ID) on delete restrict on update restrict;

alter table USER add constraint FK_REFERENCE_6 foreign key (ACCOUNT_ID)
      references ACCOUNT (ACCOUNT_ID) on delete restrict on update restrict;



