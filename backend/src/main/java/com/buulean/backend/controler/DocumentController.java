package com.buulean.backend.controler;

import com.buulean.backend.model.Document;
import com.buulean.backend.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@CrossOrigin
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @GetMapping()
    public List<Document> findDocuments(HttpServletResponse response) {
        List<Document> documents = (List<Document>) documentService.findAll();
        response.setStatus(201);
        return documents;
    }

//    @GetMapping(path = {"/{id}"})
//    public Document findDocument(@PathVariable("id") int id) {
//        return documentService.findById(id);
//    }

    @GetMapping(path = {"/{id}"})
    public Document getImage(@PathVariable("id") int id) throws IOException {
        final Optional<Document> retrievedImage = Optional.ofNullable(documentService.findById(id));
        Document doc = new Document(retrievedImage.get().getFile_name(), decompressBytes(retrievedImage.get().getFile_data()), retrievedImage.get().getFile_type());
        return doc;
    }

    @PostMapping()
    public ResponseEntity.BodyBuilder uplaodImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        Document doc = new Document(file.getOriginalFilename(),
                compressBytes(file.getBytes()),
                file.getContentType());
        documentService.save(doc);
        return ResponseEntity.status(HttpStatus.OK);
    }

    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }

    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }


//    @DeleteMapping(path ={"/{id}"})
//    public Owner delete(@PathVariable("id") int id) {
//        return ownerService.delete(id);
//    }
//

}



