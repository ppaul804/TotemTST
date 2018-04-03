chcp 65001
@echo off
rem /a - lista os atributos dos arquivos como arquivos de sistema, arquivos ocultos, somente leitura
rem /-p - cria uma pausa entre as telas, com o comando - antes não irá ter nenhuma pausa entre a listagem
rem /o:n - ordena os arquivos, no caso usamos o subparâmetro para listar somente o nome (:n)
rem /s - mostra o conteúdo dos subdiretórios
rem /b - mostra os arquivos e dierórios sem os artibutos como tamanho, data, etc.
rem em português claro um dir /a /-p /o:n /s /b >lista.txt seria:
rem liste os arquivos (todos eles) sem pausas, em ordem alfabética sem aquele monte de besteira que aparece no dos para um arquivo de texto. 
dir /a /-p /o:n /s /b >lista.txt
pause