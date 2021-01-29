## API List

- [Movie](#Movie)

  - [✅Now Playing](#Now-Playing)

  - [✅Up Coming](#Up-Coming)

  - [✅Popular](#Popular-Movie)

  - [✅Movie Detail](#Movie-Detail)

  - [✅Credit Detail](#Movie-Credit-Detail)

  - [✅Recommandation](#Movie-Recommandation)

  - [✅Similarity](#Similarity-Movie)

  - [✅Search](#Search-Movie)

- [TV](#TV)

  - [✅Top Rated](#Top-Rated)

  - [✅Popular](#Popular-TV)

  - [✅Airing Today](#Airing-Today)

  - [✅Show Detail](#Show-Detail)

  - [✅Credit Detail](#TV-Credit-Detail)

  - [✅Recommandation](#Recommandation-TV)

  - [✅Similarity](#Similarity-TV)

  - [✅Search](#Search-TV)

- [Youtube](#Youtube)

  - [✅Iframe](#Iframe)

## API

- Axios(API_URL)

  - BaseUrl: `https://api.themoviedb.org/3`

  - Params

    - api_key: YOUR_SECRET_KEY

    - language: en-US

[⬆Back to API List](#API-List)

### Movie

#### Now Playing

```
GET {{API_URL}}/movie/now_playing
```

-> Get Now Playing Movies in Array

[⬆Back to API List](#API-List)

#### Up Coming

```
GET {{API_URL}}/movie/upcoming
```

-> Get UpComing Movies in Array

[⬆Back to API List](#API-List)

#### Popular Movie

```
GET {{API_URL}}/movie/popular
```

-> Get Popular Movies in Array

[⬆Back to API List](#API-List)

#### Movie Detail

```
GET {{API_URL}}/movie/{id}?append_to_response=videos
```

-> Get Movie Detail with Youtube Videos

[⬆Back to API List](#API-List)

#### Movie Credit Detail

```
GET {{API_URL}}/movie/{id}/credits
```

-> Get Movie Credit Detail in two array(Actor & Crew)

[⬆Back to API List](#API-List)

#### Movie Recommandation

```
GET {{API_URL}}/movie/${id}/recommendations
```

-> Get Recommand Movies

[⬆Back to API List](#API-List)

#### Similarity Movie

```
GET {{API_URL}}/movie/${id}/similar
```

-> Get Similar Movies

[⬆Back to API List](#API-List)

#### Search Movie

```
GET {{API_URL}}/movie/${id}/similar?encodeURIComponent(term)
```

-> Get Search Movie

[⬆Back to API List](#API-List)

### TV

#### Top Rated

```
GET {{API_URL}}/tv/top_rated
```

-> Get Top Rated TV Shows in Array

[⬆Back to API List](#API-List)

#### Popular TV

```
GET {{API_URL}}/tv/popular
```

-> Get Popular TV shows in Array

[⬆Back to API List](#API-List)

#### Airing Today

```
GET {{API_URL}}/tv/airing_today
```

-> Get TV Shows on Airing Today in Array

[⬆Back to API List](#API-List)

#### Show Detail

```
GET {{API_URL}}/movie/{id}?append_to_response=videos
```

-> Get TV Show Detail with Youtube Videos

[⬆Back to API List](#API-List)

#### TV Credit Detail

```
GET {{API_URL}}/tv/{id}/credits
```

-> Get TV Credit Detail in two array(Actor & Crew)

[⬆Back to API List](#API-List)

#### Recommandation TV

```
GET {{API_URL}}/tv/${id}/recommendations
```

-> Get Recommand TV Shows

[⬆Back to API List](#API-List)

#### Similarity TV

```
GET {{API_URL}}/tv/${id}/similar
```

-> Get Similar TV Shows

[⬆Back to API List](#API-List)

#### Search TV

```
GET {{API_URL}}/tv/${id}/similar?encodeURIComponent(term)
```

-> Get Search TV Show

[⬆Back to API List](#API-List)

### Youtube

#### Iframe

아래는 Youtube Iframe API를 가져오는 스크립트이다. 나의 상황에 맞게 커스터마이즈하여 비디오를 제어하였다.

```
<script>
     if (!window.YT) {
        // If not, load the script asynchronously
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";

        // onYouTubeIframeAPIReady will load the video after the script is loaded
        window.onYouTubeIframeAPIReady = async function onYouTubeIframeAPIReady() {
          await loadVideo(result);
        };

        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        // If script is already there, load the video directly
        await loadVideo();
      }

    const loadVideo = async () => {
      let player;
      try {
        // the Player object is created uniquely based on the "player" id
        player = await new window.YT.Player("player", {
          // 기본적으로 너비와 높이를 설정하지 않아도 640 x 360으로 준다.
          videoId: Your Watch Video ID,
          playerVars: { origin: "https://shigatsuflix.netlify.app" },
          events: {
            onReady: Something do it!
          },
        }),
      } catch (error) {
        console.log(error);
      }
  };
    </script>
```

- [Youtube Iframe API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

[⬆Back to API List](#API-List)
