#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE cmpc_libro
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

    \c cmpc_libro;

    CREATE TABLE IF NOT EXISTS public.books
    (
        titulo text COLLATE pg_catalog."default",
        autor text COLLATE pg_catalog."default",
        editorial text COLLATE pg_catalog."default",
        precio numeric,
        disponibilidad text COLLATE pg_catalog."default",
        genero text COLLATE pg_catalog."default",
        "imagenUrl" text COLLATE pg_catalog."default",
        created date,
        updated char(1),
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 99999999 CACHE 1 ),
        CONSTRAINT books_pkey PRIMARY KEY (id)
    );
EOSQL