# Build stage
FROM maven:3.8.7-openjdk-18 AS build
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM amazoncorretto:17
ARG PROFILE=dev
ARG APP_VERSION=0.0.1

WORKDIR -from=build /build/target/order-service-*.jar /app/

EXPOSE 8082

ENV DB_URL=jdbc:postgresql://postgres:5432/order_service

ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}

CMD java -jar -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL} order-service-${JAR_VERSION}.SNAPSHOT.jar

#docker buildx build -t books/authors:0.0.1 -f Docker/Backend/Dockerfile
