### 1주차 - 기본 환경설정, docker 기본명령어

- aws ubuntu ec2 instance 생성, ssh로그인
- Docker, zsh, neovim등 개발환경설정
- repo관리 및 OT
- docker cli 기본 명령어 (run, stop, ps, rm, exec, log)
- 다음주차 frontend 잠깐 설명

과제

- Frontend build된 파일 실행방법조사
- docker명령어 익숙해지도록 연습해보기

### 2주차 - Frontend Dockerfile 제작

- Dockerfile 제작방법 - FROM, RUN, CMD, COPY
- frontend Dockerfile 같이 제작 - 방법 1
- xxxx를 이용하는 방법 설명 (1주차 과제의 스포일러라 xxxx 표시하였습니다..)

과제

- 3주차 내용이 조금많아서 예습 ( cache, multi stage build )
- 예습한 내용을 가지고 xxxx 버전 Dockerfile 직접 제작 해보기

### 3주차 - Frontend Dockerfile 더 잘짜보기

- Dockerfile cache에 대해서
- multi stage build란?
- gosu와 tini에 대해
- docker-entrypoint.sh파일 제작

과제

- CMD와 ENTRYPOINT의 차이점은?
- 기존파일 수정해보기

### 4주차 - Backend Dockerfile 생성, docker compose 이용

- 3주차 과제의 결과에 대해 잠깐 설명
- backend dockerfile 생성 - 간단
- backend와 postgresql 연결하는법 - 네트워크 관련된 내용
- docker compose로 backend 서비스 구축

과제

- rp 파일 수정
- docker compose로 하나의 웹 구축해보기 !

### 5주차 - 자동화

- github action pipeline구축하기
- 완성된 Docker image push해보기 - 미정 ECR..? DockerHub..?
- 자동화 및 알림

과제

- 개인 github에서 pipeline구축해보기

### 6주차 - monitoring

- 모니터링 소개
- grafana
- prometheus

과제

- 4주차에서 만든 docker compose 서버에 모니터링툴 등록해보기

### 7주차 - and so on

- 앞으로 공부해야할일 - DevOps가 되기위해서는 무엇을 알면좋을까?
**IaC (Infrastructure as Code) -** Ansible, Terraform
**모니터링** - datadog, prometheus, grafana, kibana,
**컨테이너** - docker, docker swarm, kubernetes, helm
**CI/CD** - jenkins, github action, gitlab runner
**AWS** - VPC, eks, cloud watch
- DevOps 프로젝트 해볼만한내용 소개
