package hhs.server.domain.persistence;

import hhs.server.domain.aop.lock.DistributedLockInterface;
import hhs.server.domain.model.dto.request.comments.UpdateCommentRequest;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Entity
@Table(name = "comments")
@SQLRestriction("deleted_at IS NULL")
public class Comments extends BaseTimeEntity implements DistributedLockInterface {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Lob
  @Column(name = "contents", nullable = false)
  private String contents;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "project_id", nullable = false)
  private Projects project;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "parent_comment_id")
  private Comments parentComment;

  @Column(name = "likes")
  private Long likes;

  @OneToMany(mappedBy = "parentComment", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
  private List<Comments> replies;

  public void update(UpdateCommentRequest updateComment) {
    this.contents = updateComment.getContents();
  }

  public void updateLikes(Long likes) {
    this.likes = likes;
  }

  @Override
  public String getEntityType() {
    return "Comments";
  }
}
