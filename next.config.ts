/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React Strict Mode 활성화
  trailingSlash: false, // URL 끝에 슬래시 자동 추가 방지
  basePath: "", // 기본 경로 문제 방지
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  assetPrefix: ".", // ✅ 경로 강제 설정 추가
};

module.exports = nextConfig;
