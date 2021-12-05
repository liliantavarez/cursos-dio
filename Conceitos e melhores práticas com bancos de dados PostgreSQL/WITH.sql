SELECT numero,nome FROM banco ORDER BY numero;
SELECT banco_numero, numero,nome FROM agencia;

WITH tbl_temp_banco AS(
  SELECT numero,nome
  FROM banco
)  
SELECT numero, nome 
FROM tbl_temp_banco;

WITH params As(
	SELECT 213 as banco_numero
  ), tbl_temp_banco AS(
  	SELECT numero,nome
    FROM banco
    JOIN params ON params.banco_numero = banco.numero
  )
  SELECT numero,nome 
  FROM tbl_temp_banco;
  
  --Usando SUB SELECT
  
SELECT banco.numero, banco.nome
FROM banco
JOIN(
SELECT 213 as banco_numero
) params ON params.banco_numero = banco.numero;

--Coloacando mais condiçoes no WITH

WITH clientes_e_transacoes AS (
	SELECT cliente.nome AS cliente, 
  		   tipo_transacao.nome as "transação", 
           cliente_transacoes.valor as valor
  FROM cliente_transacoes
  JOIN cliente on cliente.numero = cliente_transacoes.cliente_numero
  JOIN tipo_transacao ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
)
SELECT cliente,"transação",valor
from clientes_e_transacoes;

--Incluindo um nova condição 

WITH clientes_e_transacoes AS (
	SELECT cliente.nome AS cliente, 
  		   tipo_transacao.nome as "transação", 
           cliente_transacoes.valor as valor,
  			banco.nome as banco	
  FROM cliente_transacoes
  JOIN cliente on cliente.numero = cliente_transacoes.cliente_numero
  JOIN tipo_transacao ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
  JOIN banco ON banco.numero = cliente_transacoes.banco_numero 
  and banco.nome ILIKE '%Itaú%'
)
SELECT cliente,"transação",valor,banco
from clientes_e_transacoes;