package hhs.server.domain.model.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultCode {

  // User
  USER_CREATED("U001", "회원가입 성공"),
  USER_OAUTH_LOGIN_SUCCESS("U001", "소셜 로그인 성공"),
  USER_LOGIN_SUCCESS("U002", "로그인 성공"),
  USER_DETAIL_INFO_SUCCESS("U003", "유저 정보 조회 성공"),
  USER_UPDATE_SUCCESS("U004", "유저 정보 수정 성공"),


  // Project
  PROJECT_LIST_SUCCESS("P000", "프로젝트 리스트 조회 성공"),
  PROJECT_DETAIL_SUCCESS("P000", "프로젝트 상세 조회 성공"),
  PROJECT_CREATE_SUCCESS("P001", "프로젝트 생성 성공"),
  PROJECT_UPDATE_SUCCESS("P002", "프로젝트 수정 성공"),
  PROJECT_DELETE_SUCCESS("P003", "프로젝트 삭제 성공"),

  // Comments
  COMMENT_WRITE_SUCCESS("C001", "댓글 작성 성공"),
  COMMENT_UPDATE_SUCCESS("C005", "댓글 수정 성공"),
  COMMENT_DELETE_SUCCESS("C002", "댓글 삭제 성공"),
  COMMENT_REPLY_SUCCESS("C003", "대댓글 작성 성공"),
  COMMENT_LIST_SUCCESS("C004", "댓글 리스트 조회 성공"),

  // Likes
  PROJECT_DISLIKE_SUCCESS("L001", "프로젝트 좋아요 취소 성공"),
  PROJECT_LIKE_SUCCESS("L002", "프로젝트 좋아요 성공"),
  COMMENT_DISLIKE_SUCCESS("L003", "댓글 좋아요 취소 성공"),
  COMMENT_LIKE_SUCCESS("L004", "댓글 좋아요 성공"),

  // Search
  SEARCH_SUCCESS("S001", "검색 성공"),

  // Badge
  BADGE_LIST_SUCCESS("B001", "뱃지 리스트 조회 성공"),
  BADGE_CREATE_SUCCESS("B002", "뱃지 생성 성공"),
  BADGE_UPDATE_SUCCESS("B003", "뱃지 수정 성공"),
  BADGE_DELETE_SUCCESS("B004", "뱃지 삭제 성공"),
  ;
  private final String code;
  private final String message;
}
