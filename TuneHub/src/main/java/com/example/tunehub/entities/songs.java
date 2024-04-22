package com.example.tunehub.entities;

import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class songs {
    @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     int id;
     String name;
     String artist;
     String genre;
    String link;
@ManyToMany
List<playlist> playlist;
public songs() {
    super();
}
public songs(int id, String name, String artist, String genre, String link,
        List<com.example.tunehub.entities.playlist> playlist) {
            super();
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.genre = genre;
    this.link = link;
    this.playlist = playlist;
}
public int getId() {
    return id;
}
public void setId(int id) {
    this.id = id;
}
public String getName() {
    return name;
}
public void setName(String name) {
    this.name = name;
}
public String getArtist() {
    return artist;
}
public void setArtist(String artist) {
    this.artist = artist;
}
public String getGenre() {
    return genre;
}
public void setGenre(String genre) {
    this.genre = genre;
}
public String getLink() {
    return link;
}
public void setLink(String link) {
    this.link = link;
}
public List<playlist> getPlaylist() {
    return playlist;
}
public void setPlaylist(List<playlist> playlist) {
    this.playlist = playlist;
}
@Override
public String toString() {
    return "songs [id=" + id + ", name=" + name + ", artist=" + artist + ", genre=" + genre + ", link=" + link
            + ", playlist=" + playlist + "]";
}


}
