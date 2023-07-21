ARG VARIANT="jammy"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

RUN apt-get update && \
    apt-get install -y tzdata && \
    ln -fs /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata

# make
RUN apt-get update && \
    apt-get install -y bash-completion

# nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && \
    apt-get install -y nodejs
RUN npm install --global yarn
