ARG ELASTIC_VERSION

FROM docker.elastic.co/beats/filebeat:7.6.2

COPY config/filebeat.yml /usr/share/filebeat/filebeat.yml
USER root

RUN mkdir /var/logs

RUN chown -R root /usr/share/filebeat
