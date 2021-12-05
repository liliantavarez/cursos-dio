--VIEWS: camadas para as tabelas; aceitam comandos de SELECT, INSERT, UPDATE e DELETE
-- comandos de INSERT, UPDATE e DELETE só são aplicados em VIEWS referencia unica tabela/*
/*
Parametros:
OR REPLACE: Cria ou substitui uma view
TEMP/TEMPORARY: Define a VIEW como temporaria, ou seja só existe na sessão que esta aberta
RECURSIVE: Um SELECT dentro da VIEW que vai chamar a propia VIEW de maneira RECURSIVAtipo_transacao
*/

--IDEMPOTENCIA
CREATE or REPLACE VIEW vw_bancos AS(
	SELECT numero,nome,ativo --campos da view
  	FROM banco
);

SELECT numero,nome,ativo
from vw_bancos;

CREATE or REPLACE VIEW vw_bancos (banco_numero,banco_nome,banco_ativo) as (
	SELECT numero,nome,ativo
  	FROM banco
);
SELECT banco_numero,banco_nome,banco_ativo
FROM vw_bancos;

INSERT INTO vw_bancos (numero,nome,ativo) VALUES (100,'Banco CEM',TRUE);
UPDATE vw_bancos SET nome = 'Banco 100' WHERE numero =100;
DELETE FROM vw_bancos WHERE numero = 100;

--RECURSIVEtipo_transacao
--Obrigatorio a existencia dos campos da VIEW e o uso de UNION ALL
CREATE TABLE if NOT EXISTS funcionarios(
	id serial not NULL,
  	nome VARCHAR(50),
  	gerente INTEGER,
  	PRIMARY KEY id,
  	FOREIGN KEY(gerente) REFERENCES funcionarios(id)
);

INSERT INTO funcionarios (nome.gerente) VALUES ('Ancelmo',null); --sem gerente
INSERT INTO funcionarios (nome.gerente) VALUES ('Beatriz',1);--Ancelmo é o gerente
INSERT INTO funcionarios (nome.gerente) VALUES ('Magno',1);-- Ancelmo é o gerente
INSERT INTO funcionarios (nome.gerente) VALUES ('Cremilda',2);--Breatriz é a gerente
INSERT INTO funcionarios (nome.gerente) VALUES ('Wagner',4);--Cremilda é a gerente

CREATE or REPLACE RECURSIVE VIEW vw_funcionarios(id,gerente,funcionario) AS (
	SELECT id,CAST("AS VARCHAR") AS gerente, nome
  	FROM funcionarios 
  	WHERE gerente is NULL
  	UNION ALL 
  	SELECT funcionarios.id, gerentes.nome, funcionarios.nome
    FROM funcionarios
  	JOIN vw_funcionarios ON vw_funcionarios.id = funcionarios.gerente
  	JOIN funcionarios gerente on gerentes.id = vw_funcionarios.id
);




