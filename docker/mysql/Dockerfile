FROM mysql/mysql-server:8.0

ENV TZ=UTC

COPY ./docker/mysql/my.cnf /etc/my.cnf

COPY ./docker/mysql/init-sql /docker-entrypoint-initdb.d

ARG MYSQL_USER
ARG MYSQL_PASSWORD

RUN { \
    echo "ALTER USER '${MYSQL_USER}'@'%' IDENTIFIED WITH mysql_native_password BY '${MYSQL_PASSWORD}';"; \
    } > ./docker-entrypoint-initdb.d/user_init.sql