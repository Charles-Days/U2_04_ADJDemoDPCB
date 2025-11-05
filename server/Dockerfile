FROM maven:3.9.9-eclipse-temurin-21 

WORKDIR /app

COPY . .

#server1.0.0-SNAPSHOT .jar -> app.jar
RUN mvn clean package -DskipTests && cp target/*.jar app.jar

EXPOSE 8080

#java -jar app.jar
ENTRYPOINT [ "java","-jar","app.jar" ]
