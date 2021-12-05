SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
SET default_tablespace = '';
SET default_table_access_method = heap;
CREATE TABLE public.agencia (
    banco_numero integer NOT NULL,
    numero integer NOT NULL,
    nome character varying(80) NOT NULL,
    ativo boolean DEFAULT true NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE public.banco (
    numero integer NOT NULL,
    nome character varying(50) NOT NULL,
    ativo boolean DEFAULT true NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE public.cliente (
    numero bigint NOT NULL,
    nome character varying(120) NOT NULL,
    email character varying(250) NOT NULL,
    ativo boolean DEFAULT true NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE SEQUENCE public.cliente_numero_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cliente_numero_seq OWNED BY public.cliente.numero;
CREATE TABLE public.cliente_transacoes (
    id bigint NOT NULL,
    banco_numero integer NOT NULL,
    agencia_numero integer NOT NULL,
    conta_corrente_numero bigint NOT NULL,
    conta_corrente_digito smallint NOT NULL,
    cliente_numero bigint NOT NULL,
    tipo_transacao_id smallint NOT NULL,
    valor numeric(15,2) NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE SEQUENCE public.cliente_transacoes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cliente_transacoes_id_seq OWNED BY public.cliente_transacoes.id;
CREATE TABLE public.conta_corrente (
    banco_numero integer NOT NULL,
    agencia_numero integer NOT NULL,
    numero bigint NOT NULL,
    digito smallint NOT NULL,
    cliente_numero bigint NOT NULL,
    ativo boolean DEFAULT true NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE public.demo (
    id integer NOT NULL,
    name character varying(200) DEFAULT ''::character varying NOT NULL,
    hint text DEFAULT ''::text NOT NULL
);
CREATE SEQUENCE public.demo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.demo_id_seq OWNED BY public.demo.id;
CREATE TABLE public.tipo_transacao (
    id smallint NOT NULL,
    nome character varying(50) NOT NULL,
    ativo boolean DEFAULT true NOT NULL,
    data_criacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE SEQUENCE public.tipo_transacao_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tipo_transacao_id_seq OWNED BY public.tipo_transacao.id;
ALTER TABLE ONLY public.cliente ALTER COLUMN numero SET DEFAULT nextval('public.cliente_numero_seq'::regclass);
ALTER TABLE ONLY public.cliente_transacoes ALTER COLUMN id SET DEFAULT nextval('public.cliente_transacoes_id_seq'::regclass);
ALTER TABLE ONLY public.demo ALTER COLUMN id SET DEFAULT nextval('public.demo_id_seq'::regclass);
ALTER TABLE ONLY public.tipo_transacao ALTER COLUMN id SET DEFAULT nextval('public.tipo_transacao_id_seq'::regclass);
ALTER TABLE ONLY public.agencia
    ADD CONSTRAINT agencia_pkey PRIMARY KEY (banco_numero, numero);
ALTER TABLE ONLY public.banco
    ADD CONSTRAINT banco_pkey PRIMARY KEY (numero);
ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (numero);
ALTER TABLE ONLY public.cliente_transacoes
    ADD CONSTRAINT cliente_transacoes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.conta_corrente
    ADD CONSTRAINT conta_corrente_pkey PRIMARY KEY (banco_numero, agencia_numero, numero, digito, cliente_numero);
ALTER TABLE ONLY public.demo
    ADD CONSTRAINT demo_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tipo_transacao
    ADD CONSTRAINT tipo_transacao_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.agencia
    ADD CONSTRAINT agencia_banco_numero_fkey FOREIGN KEY (banco_numero) REFERENCES public.banco(numero);
ALTER TABLE ONLY public.cliente_transacoes
    ADD CONSTRAINT cliente_transacoes_banco_numero_agencia_numero_conta_corre_fkey FOREIGN KEY (banco_numero, agencia_numero, conta_corrente_numero, conta_corrente_digito, cliente_numero) REFERENCES public.conta_corrente(banco_numero, agencia_numero, numero, digito, cliente_numero);
ALTER TABLE ONLY public.conta_corrente
    ADD CONSTRAINT conta_corrente_banco_numero_agencia_numero_fkey FOREIGN KEY (banco_numero, agencia_numero) REFERENCES public.agencia(banco_numero, numero);
ALTER TABLE ONLY public.conta_corrente
    ADD CONSTRAINT conta_corrente_cliente_numero_fkey FOREIGN KEY (cliente_numero) REFERENCES public.cliente(numero);