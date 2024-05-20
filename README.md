# Simple Projects

## 1. Starbucks page

<img width="700" alt="스크린샷 2024-02-25 20 01 35" src="https://github.com/sonprogrammer/simpleProjects/assets/97154156/cd79096c-65f6-4421-adfd-fa2815b227ec">

### Stacks
1. html
2. css
3. javascript
4. gsap
5. swiper
6. ifram(api)
7. scrollmagic
   
### Font
1. 눈누폰트(조선궁서체)

### Deploy
1. netlify : [링크](https://monumental-baklava-6ea958.netlify.app)
     

## 2. apple iPad responsive web page

<img width="700" alt="스크린샷 2024-02-25 20 01 35" src="https://github.com/sonprogrammer/simpleProjects/assets/97154156/e4c48533-fb69-4404-a24a-2c2911b10d37">

### Stacks
1. html
2. css
3. javascript


### Font
1. 구글 폰트 (영어 : Roboto, 한글 : Noto Sans KR)

### Deploy
1. Vercel : [링크](https://simple-projects-bay.vercel.app/)

### Inspiration & new chanllenge etc...
1. sprite Icon animation.
   
   ex)
   
   <img width="391" alt="스크린샷 2024-02-25 20 08 02" src="https://github.com/sonprogrammer/simpleProjects/assets/97154156/aec85420-021c-41e8-83ec-aee671163dcb">



## 3. Movie search web page

<img width="700" alt="스크린샷 2024-02-29 18 21 08" src="https://github.com/sonprogrammer/simpleProjects/assets/97154156/dd2ec331-90dc-4e27-bf91-e5b3dccb8816">

### Stacks
1. html
2. css
3. javascript
4. typescript(ts branch)

### Font
1. 구글 폰트 (영문: Roboto 한글: Noto Sans KR)

### Deploy
1. Vercel : [링크](https://simple-projects-seven.vercel.app/#/)

### Reference
1. Transform tools.(https://transform.tools/) To set up types easily


## 4. Disney plus

<img width="700" alt="스크린샷 2024-03-15 21 50 37" src="https://github.com/sonprogrammer/simpleProjects/assets/97154156/614a417d-6461-41af-892c-78358eb29a4b">

### Stacks
1. html
2. css
3. javascript
4. React
5. swiper
6. styled components

### Deploy
1. firebase : [링크](https://disney-b43d1.web.app/main)

### Inspiration
1. debounce function is delayed until a certain amount of times(anyway i should maek this function)
2. using various functions like auth

### Trouble shooting🔫
1. after installing firebase-tools with "~npm install -g firebase-tools~" command, "firebase login" command didn't work. so i resolved it by adding an automatic installation script (`curl -sL https://firebase.tools | bash`)


## 4. Online flee market

<img width="700" alt="스크린샷 2024-05-20 16 23 00" src="https://github.com/sonprogrammer/simpleProjects/assets/97154156/33a0a365-4c4c-4fae-8f0e-62a0f722ed1a">

### Stacks
1. html
2. css
3. typescript
4. next
5. SWR(데이터를 가져오기 위한 리액트 훅 라이브러리)
6. tailwind
7. React Toastify(스냅바 나오게 하는것)
8. React Loader Spinner(로딩될 때 나오는 UI) - npm i react-loader-spinner)
9. Day.js(시간 라이브러리)
10. react-pagination(페이지네이션)
11. KaKao API(카카오 맵사용)
13. Next Cloudinary(이미지 업로드 모듈)
14. bycrypt(비밀번호 암호화 라이브러리)
15. Prisma
16. PostgreSQL
17. http polling(채팅기능)


### Inspiration
1.Dynamic import : it's a method of asynchronously loading modules in JavaScript. and this allows you to dynamically import modules during code execution. you can also load modules when you need without loading all the code you don't need at initialization stage. -> it make reduce loading time.(kakaomap - i use this when i bring kakaomap api)
```const KakaoMap = dynamic(() => import('../../components/KakaoMap'), { ssr: false })``` like this...
2. chat implementation : i was using http polling which takes data every 1000ms from DB, but it's not good in term of UX, so i use the trigger function of useSWRMutation to show data to user right away whenever the trigger is called. 

### Trouble shooting🔫
1. login function is suppossed to redirect to main page, but the page wasn't go well
   ```const onSubmit: SubmitHandler<FieldValues> = async (body) =>{
        setIsLoading(true)
        try {
            const data = signIn('credentials', body)
            console.log('data', data)
        } catch (error) {
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }
   ```
   my code was like above. so i use `signIn` it starts the login process at the same time as the call is made, and when the user succeeds in loggin in, the current page is refreshed to apply a new session.
2. my `product` folder structure was `src/product/[productid]/page.tsx`. [productid] refers to the part that uses a dynamic path. in this way, the value enterd in that part of the url is dynamically delivered to that page. important thing is that the values stored in the parameters objects should also be accessed using the correct variable name.
   
   

