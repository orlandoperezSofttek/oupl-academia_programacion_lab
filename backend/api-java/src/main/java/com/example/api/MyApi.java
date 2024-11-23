package com.example.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.modelo.Datos;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")

public class MyApi {
    //Permite que la API sea consumida desde el localhost en el puerto 4200
    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("/datos")
    public ResponseEntity<List<Datos>> getData(){
        //Implementamos un try catch para manejar los errores de estado HTTP
        try {
        Datos dato1 = new Datos(1, "Lionel Messi", "Futbolista Argentino de 37 años");
        Datos dato2 = new Datos(2, "Cristiano Ronaldo", "Futbolista Portugues de 39 años");
        Datos dato3 = new Datos(3, "Kylian Mbappe", "Futbolista Frances de 25 años");

        if(dato1 == null || dato2 == null){
            throw new Exception("Error al tratar de crear los datos");
        }

        //Aqui implementamos el httpstatus cuando los datos pasan correctamente
        return new ResponseEntity<>(Arrays.asList(dato1, dato2, dato3), HttpStatus.OK);
        } catch (Exception e) {
            // TODO: handle exception
            //Enviamos un error de servidor en caso de que exista un fallo por http
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
