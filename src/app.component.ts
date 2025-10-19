import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="text-align:center">
      <h1>Welcome to NareshIT Angular App!</h1>
      <p>This is a sample Angular application deployed on AWS using Terraform.</p>
      <h2>Features:</h2>
      <ul style="list-style: none;">
        <li>✅ S3 Static Website Hosting</li>
        <li>✅ CloudFront CDN</li>
        <li>✅ WAF Security</li>
        <li>✅ CodePipeline CI/CD</li>
        <li>✅ CodeBuild Automation</li>
      </ul>
    </div>
  `,
  styles: [`
    div { padding: 20px; font-family: Arial, sans-serif; }
    h1 { color: #007acc; }
    ul { display: inline-block; text-align: left; }
    li { margin: 10px 0; }
  `]
})
export class AppComponent {
  title = 'nareshit-angular-app';
}