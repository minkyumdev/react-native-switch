# NPM 배포 가이드

## 배포 전 체크리스트

### 1. NPM 패키지 이름 확인
현재 패키지 이름: `react-native-switch`

NPM에서 중복 확인:
```bash
npm info react-native-switch
```

만약 이미 존재한다면 `package.json`의 `name` 필드를 변경해야 합니다.

### 2. GitHub 저장소 설정
`package.json`의 `repository` 필드를 업데이트하세요:
```json
"repository": {
  "type": "git",
  "url": "https://github.com/your-username/react-native-switch.git"
}
```

### 3. Author 정보 추가
`package.json`의 `author` 필드를 업데이트하세요:
```json
"author": "Your Name <your.email@example.com>"
```

### 4. 빌드 확인
```bash
npm run build
```

빌드가 성공하면 `dist/` 폴더에 다음 파일들이 생성됩니다:
- `index.js`
- `index.d.ts`
- `index.js.map`
- `index.d.ts.map`

### 5. 테스트
앱에서 라이브러리를 테스트:
```bash
npm run ios
# 또는
npm run android
```

## 배포 단계

### 1. NPM 로그인
```bash
npm login
```

### 2. 패키지 이름 중복 확인
```bash
npm search react-native-switch
```

### 3. 배포
```bash
npm publish
```

**참고**: `prepublishOnly` 스크립트가 자동으로 빌드를 실행합니다.

### 4. 공개 범위 설정 (필요시)
만약 스코프 패키지로 배포하려면:
```bash
npm publish --access public
```

## 버전 업데이트

### 패치 버전 (0.1.0 → 0.1.1)
```bash
npm version patch
npm publish
```

### 마이너 버전 (0.1.0 → 0.2.0)
```bash
npm version minor
npm publish
```

### 메이저 버전 (0.1.0 → 1.0.0)
```bash
npm version major
npm publish
```

## 배포 후 확인

1. NPM 페이지 확인: https://www.npmjs.com/package/react-native-switch
2. 설치 테스트:
```bash
npm install react-native-switch
```

## 문제 해결

### 패키지 이름이 이미 존재하는 경우
`package.json`의 `name` 필드를 고유한 이름으로 변경하세요.

### 권한 오류
NPM 계정에 올바른 권한이 있는지 확인하세요.

### 배포 후 수정이 필요한 경우
버전을 업데이트하고 다시 배포하세요.

